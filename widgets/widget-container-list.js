'use strict';

var widgetContainerList = function(blessed, screen) {
  return blessed.listtable({
    parent: screen,
    label: 'Containers',
    keys: true,
    mouse: true,
    data: null,
    tags: true,
    interactive: true,
    border: 'line',
    hover: {
      bg: 'blue'
    },
    style: {
      header: {
        fg: 'blue',
        bold: true
      },
      cell: {
        fg: 'magenta',
        selected: {
          bg: 'blue'
        }
      }
    },
    width: '80%',
    height: '55%',
    top: '0',
    left: '0',
    align: 'center'
  });

};

module.exports = widgetContainerList;
