$(function() {
    var e = $(".main");
    return new Handsontable(e.get(0),{
        data: [["Java", "1", "降", "-0.01%"],["C", "2", "升", "+2.44%"],["Python", "3", "升", "+1.41%", "Y"],["C++", "4", "降", "-2.58%"],["C#", "5", "升", "+2.07%"],["Visual Basic.NET", "6", "降", "-1.17%"],["JavaScript", "7", "降", "-0.85%"]],
        contextMenu: true,
        manualRowResize: true,
        manualColumnResize: true,
        rowHeaders: false,
        colHeaders: ["语言名称", "排名", "升或降", "变化幅度"]
    })
});

