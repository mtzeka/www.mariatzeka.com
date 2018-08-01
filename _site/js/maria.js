document.addEventListener('DOMContentLoaded', function () {
  var showAll = function (item) {
    item.classList.remove('hide');
  };

  var hideAll = function (item) {
    item.classList.add('hide');
  };

  var resetSelect = function (item) {
    console.log(item);
    item.classList.remove('selected');
  };

  var filterNodes = document.querySelectorAll('.filter');

  filterNodes.forEach(function (item) {
    var onItemOnclick = function () {
      var filter = item.getAttribute('filter');

      document.querySelectorAll('.filter').forEach(resetSelect);
      item.classList.add('selected');

      document.querySelectorAll('.photos li').forEach(hideAll);
      document.querySelectorAll('.' + filter).forEach(showAll);

      window.scrollTo(0, 0);
    };

    item.addEventListener('click', onItemOnclick);
  });

  document.querySelector('.reset-filter').addEventListener('click', function () {
    document.querySelectorAll('.filter').forEach(resetSelect);
    document.querySelectorAll('.photos li').forEach(showAll);

    window.scrollTo(0, 0);
  });
});
