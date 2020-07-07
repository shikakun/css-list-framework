import './styles/style.scss';

$(function() {
  const $body = $('body');
  const $highlight = $('#highlight');
  const activeSelector = 'is-highlight';

  $body.addClass(activeSelector);
  $highlight.prop('checked');

  $highlight.on('change',function() {
    if ($(this).prop('checked')) {
      $body.addClass(activeSelector);
    } else {
      $body.removeClass(activeSelector);
    }
  });
});
