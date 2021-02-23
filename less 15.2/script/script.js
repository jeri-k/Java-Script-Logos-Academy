$(document).ready(function() {
    let t1 = $('#s1').text();
    let t2 = $('.s2').text();
    let t3 = $('#second i').text();
    let t4 = $('q[title="hello"]').text();
    let t5 = $('[href][target="_blank"]').text();
    let t6 = $('.extra:eq(1)').text();
    let textContent = t1+t2+t3+t4+t5+t6;
    alert(textContent);
})