import createJsBasic from './js_basic/hello';

function entries() {
    const root = document.createElement('div');
    root.innerHTML = '<p><a href="src/html_element/html_element_category.html" title="HTML元素分类" target="_blank">HTML元素分类</a></p>'
        + '<p><a href="src/html_element/html_element_attribute.html" title="HTML元素属性">HTML元素属性</a></p>'
        + '<p><a href="src/html_text/html_text.html" title="HTML文本">HTML文本</a></p>'
        + '<p><a href="src/html_image/html_image.html" title="HTML图片">HTML图片</a></p>'
        + '<p><a href="src/css_demo/css.html" title="css">css</a></p>'
        + '<p id="js_basic_entry"><a href="#js_basic" title="JS基础">JS基础</a></p>'
        + '<p><a href="src/calc/calc.html" title="计算器">计算器</a></p>'
        + '<div id="content"></div>';
    return root;
}
const root = entries();
document.body.appendChild(root);

const js_basic = document.getElementById("js_basic_entry");
js_basic.onclick = function(){
    document.body.appendChild(content);
}