var cloud_name,
public_id,
upload_preset,
slice_size,
resource_type,
upload_file,
form_upload,
x_unique_upload_id = +new Date(),
upload_response;

function init() {
  cloud_name = document.getElementById("cloud_name");
  public_id = document.getElementById("public_id");
  upload_preset = document.getElementById("upload_preset");
  slice_size = document.getElementById("slice_size");
  resource_type = document.getElementById("resource_type");
  upload_file = document.getElementById("upload_file");
  form_upload = document.getElementById("form_upload");
  upload_response = document.getElementById("upload_response");
  progress_bar = document.getElementById("progress_bar");
  form_upload.addEventListener("submit", (e) => {
    e.preventDefault();
    if (areAllFieldsValid()) processFile();
    else {
      alert("All fields are required");
    }
  });
}

function areAllFieldsValid() {
return (
  cloud_name.value !== "" &&
  public_id.value !== "" &&
  upload_preset.value !== "" &&
  parseInt(slice_size.value) >= 5000000 &&
  resource_type.value !== "" &&
  upload_file.files.length > 0
);
}

function processFile() {
var file = upload_file.files[0];
var size = file.size;
var start = 0;

setTimeout(loop, 3);

function loop() {
  var end = start + parseInt(slice_size.value);
  // console.log("loop", start, end, parseInt(slice_size.value));

  if (end > size) {
    end = size;
  }
  var s = slice(file, start, end);
  send(s, start, end - 1, size);
  if (end < size) {
    start += parseInt(slice_size.value);
    setTimeout(loop, 3);
  }
}
}

function send(piece, start, end, size) {
  // console.log("start ", start);
  // console.log("end", end);

  var formdata = new FormData();
  // console.log("x_unique_upload_id", x_unique_upload_id);

  formdata.append("file", piece);
  formdata.append("upload_preset", upload_preset.value);
  formdata.append("cloud_name", cloud_name.value);
  formdata.append("public_id", public_id.value);
  var xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "https://api.cloudinary.com/v1_1/" +
      cloud_name.value +
      "/" +
      resource_type.value +
      "/upload",
    false
  );
  xhr.setRequestHeader("X-Unique-Upload-Id", x_unique_upload_id);
  xhr.setRequestHeader(
    "Content-Range",
    "bytes " + start + "-" + end + "/" + size
  );

  xhr.onload = function () {
    var responseObject = JSON.parse(this.responseText);
    // console.log("Response", this.responseText);
    upload_response.value +=
      start + "-" + end + "/" + size + ": " + this.responseText + "\n";
    
    // 0-5999999/14803367664: {"done": false}
    // if start = 0
    if(start == 0) {
    } else if(start > 0) {
      var percentage = (start/size)*100;
      var displayPercentage = Math.floor(percentage);

      if(percentage >= 6) {
        // update progress bar width
        // console.log("update progress bar width");
        progress_bar.style["width"] = displayPercentage+'%';
      }
      if(percentage >= 1) {
        // update progress bar percentage text
        // console.log("update progress bar percentage text");
        progress_bar.ariaValueNow = displayPercentage;
        progress_bar.innerText = displayPercentage+'%';
      }
    }
    console.log(responseObject);
    console.log(responseObject.hasOwnProperty("asset_id"));
    if(responseObject.hasOwnProperty("asset_id")) {
      progress_bar.style["width"] = "100%";
      progress_bar.ariaValueNow = "100";
      progress_bar.innerText = "100%";
    }
  };

  xhr.send(formdata);
}

function slice(file, start, end) {
var slice = file.mozSlice
  ? file.mozSlice
  : file.webkitSlice
  ? file.webkitSlice
  : file.slice
  ? file.slice
  : noop;

return slice.bind(file)(start, end);
}

function noop() {}

init();