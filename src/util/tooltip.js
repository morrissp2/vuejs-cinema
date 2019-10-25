import { addClass, removeClass } from './helpers';
let mouseoverhandler = function(event) {
    let span = event.target.parentNode.getElementsByTagName('SPAN')[0];
    addClass(span, 'tooltip-show');
}
let mouseouthandler = function(event) {
    let span = event.target.parentNode.getElementsByTagName('SPAN')[0];
    removeClass(span, 'tooltip-show');
}

export default {
    install(Vue) {
        Vue.directive('tooltip', {
            bind(el, bindings) {
                let span = document.createElement('SPAN');
                let text = document.createTextNode(`Seats available: ${bindings.value.seats}`);
                span.appendChild(text);
                addClass(span,'tooltip');
                el.appendChild(span);
                let div = el.getElementsByTagName('DIV')[0];
                div.addEventListener('mouseover',mouseoverhandler);
                div.addEventListener('mouseout',mouseouthandler);
                div.addEventListener('touchstart',mouseoverhandler);
                div.addEventListener('touchend',mouseouthandler);
            },
            unbind(el) {
                let div = el.getElementsByTagName('DIV')[0];
                div.removeEventListener('mouseover',mouseoverhandler);
                div.removeEventListener('mouseout',mouseouthandler);
                div.removeEventListener('touchstart',mouseoverhandler);
                div.removeEventListener('touchend',mouseouthandler);
        
            }
        });        
    }
};