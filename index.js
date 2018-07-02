import browserUpdate from './update.npm.full.js';

const OUTDATE_DIFF = -0.01;

const settings = {

    // Уведомляемые версии браузеров. Отрицательное число означает отсчет версий от текущей.
    notify : {
        i : OUTDATE_DIFF,
        f : OUTDATE_DIFF,
        o : OUTDATE_DIFF,
        s : OUTDATE_DIFF,
        c : OUTDATE_DIFF,
    },

    // через сколько часов сообщение появится снова
    reminder : 1,

    // Проверять уязвимости в браузера
    insecure : true,

    unsupported : true,

    // открыть ссылку в новом окне/вкладке
    newwindow : true,

    // Не показывать кнопку "Игнорировать" для закрытия уведомления
    noclose : true,

    // DOM Element where the notification will be injected.
    container : document.body,

    // The position where the notification should be shown. Available options are:"top", "bottom", "corner"
    style : 'bottom',

    url : null,
};

document.addEventListener( 'DOMContentLoaded', function() {
    browserUpdate( settings );
} );
