module("Calculator test suite", { setup: function () { initialize();}});

test("Button click test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        var btn = document.getElementById("btn" + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, "Expected result: " + expected + "   Actual result: " + result);

        var expectedLength = i < 2 ? 1 : i;
        var actualLength = txtInput.value.length;
        equal(actualLength, expectedLength, "Expected length: " + expectedLength + "   Actual length: " + actualLength);

    }

});

test("Add test", function () {
    expect(2);
    txtInput.value = "10";
    txtResult.value = "20";
    var btn = document.getElementById("btnPlus");
    QUnit.triggerEvent(btn, "click");
    var expected = "30";
    equal(txtResult.value, expected, "Expected result: " + expected + "   Actual result: " + txtResult.value);
    expected = "0";
    equal(txtInput.value, expected, "Expected result: " + expected + "   Actual result: " + txtInput.value);
});

test("Subtract test", function () {
    expect(2);
    txtInput.value = "10";
    txtResult.value = "20";
    var btn = document.getElementById("btnMinus");
    QUnit.triggerEvent(btn, "click");
    var expected = "10";
    equal(txtResult.value, expected, "Expected result: " + expected + "   Actual result: " + txtResult.value);
    expected = "0";
    equal(txtInput.value, expected, "Expected result: " + expected + "   Actual result: " + txtInput.value);
});

test("Clear entry test", function () {
    expect(1);
    txtInput.value = "10";
    var btn = document.getElementById("btnClearEntry");
    QUnit.triggerEvent(btn, "click");
    var expected = "0";
    equal(txtInput.value, expected, "Expected result: " + expected + "    Actual result: " + txtInput.value);

});

test("Clear test", function () {
    expect(2);
    txtInput.value = "10";
    txtResult.value = "20";
    var btn = document.getElementById("btnC");
    QUnit.triggerEvent(btn, "click");
    var expected = "0";
    equal(txtInput.value, expected, "Expected result: " + expected + "    Actual result: " + txtInput.value);
    equal(txtResult.value, expected, "Expected result: " + expected + "   Actual result: " + txtResult.value);
});

test("Initialize test", function () {
    expect(2);
    var expected = "0";
    equal(txtInput.value, expected, "Expected result: " + expected + "    Actual result: " + txtInput.value);
    equal(txtResult.value, expected, "Expected result: " + expected + "   Actual result: " + txtResult.value);
});

