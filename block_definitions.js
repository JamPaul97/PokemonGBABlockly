Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Main Script block");
    this.appendStatementInput("main")
        .setCheck(null)
        .appendField("Script");
    this.appendValueInput("start_offset")
        .setCheck("sixByte")
        .appendField("Offset");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sixbyte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0x")
        .appendField(new Blockly.FieldTextInput("000000", sixByteValidator), "value");
    this.setOutput(true, null);
    this.setColour(90);
 this.setTooltip("A six byte word");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0x")
        .appendField(new Blockly.FieldTextInput("0",byteValidator), "value")
    this.setOutput(true, "byte");
    this.setColour(90);
 this.setTooltip("A single byte");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['word'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0x")
        .appendField(new Blockly.FieldTextInput("00",wordValidator), "value");
    this.setOutput(true, "word");
    this.setColour(90);
 this.setTooltip("Two bytes");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dword'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("0x")
        .appendField(new Blockly.FieldTextInput("0000",dwordValidator), "value");
    this.setOutput(true, "dword");
    this.setColour(90);
 this.setTooltip("Four bytes");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("text goes here"), "value");
    this.setOutput(true, "string");
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['lock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("lock");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Locks down movement for the caller");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['faceplayer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("faceplayer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("Turns the caller towards the player");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['msgbox'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("string")
        .appendField("Message     text :");
    this.appendDummyInput()
        .appendField("Type :")
        .appendField(new Blockly.FieldDropdown([["0x02","0x02"], ["0x03","0x03"], ["0x04","0x04"], ["0x06","0x06"]]), "type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['msgbox_simple'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("string")
        .appendField("Message     text :");
    this.appendDummyInput()
        .appendField("Type :")
        .appendField(new Blockly.FieldDropdown([["0x02","0x02"], ["0x03","0x03"], ["0x04","0x04"], ["0x06","0x06"]]), "type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['msgbox_question'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("string")
        .appendField("Message     text :");
    this.appendStatementInput("yes")
        .setCheck(null)
        .appendField("If yes do :");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setvar");
    this.appendValueInput("var")
        .setCheck("word")
        .appendField("Set variable:");
    this.appendValueInput("value")
        .setCheck("word")
        .appendField("value to :");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['addvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("addvar");
    this.appendValueInput("var")
        .setCheck("word")
        .appendField("Add to variable:");
    this.appendValueInput("value")
        .setCheck("word")
        .appendField("value:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['subvar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("subvar   ");
    this.appendValueInput("var")
        .setCheck("word")
        .appendField("Sub from variable:");
    this.appendValueInput("value")
        .setCheck("word")
        .appendField("value:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['comparevar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("comparevar");
    this.appendValueInput("var")
        .setCheck("word")
        .appendField("If variable");
    this.appendDummyInput()
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([["Lower than","0x0"], ["Equal To","0x1"], ["Greater Than","0x2"], ["Lower Than or Equal To","0x3"], ["Greater Than or Equal To","0x4"]]), "compare");
    this.appendValueInput("value")
        .setCheck("word")
        .appendField("value :");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['warp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Warp");
    this.appendValueInput("bank")
        .setCheck("byte")
        .appendField("Bank");
    this.appendValueInput("number")
        .setCheck("byte")
        .appendField("Number");
    this.appendValueInput("exit")
        .setCheck("byte")
        .appendField("Exit");
    this.appendValueInput("x")
        .setCheck("word")
        .appendField("X Cords");
    this.appendValueInput("y")
        .setCheck("word")
        .appendField("Y Cords");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["Normal","0"], ["Muted","1"], ["Walk","2"]]), "type");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(285);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("end");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['release'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("release");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};