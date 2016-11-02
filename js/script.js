class GithubInteractor {
  constructor(token) {
    this.token = token
  }
}

function createIssue(repoName, repoOwner, issueTitle, issueBody) {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/issues";
  var data = {title: issueTitle, body: issueBody}
  var JSONdata = JSON.stringify(data);
  var interactor = new GithubInteractor('c196d215a87f293b848e6904118d2c66bec1ed21');
  $.ajax({
    headers: {Authorization: 'token ' + interactor.token},
    url: url,
    data: JSONdata,
    type: 'POST',
    success: handleResponse,
    error: handleError
  });
}

function submitForm() {
  $('form').on('submit', function() {
    var name = $('#repoName').val();
    var owner = $('#repoOwner').val();
    var title = $('#title').val();
    var body = $('#body').val();
    createIssue(name, owner, title, body);
  });
}

function handleResponse() {
  alert("success");
  $('#issue').append()
}

function handleError() {
  alert("fail");
  return 'Post error: '
}

$(document).ready(submitForm);
