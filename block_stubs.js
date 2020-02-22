Blockly.JavaScript['main'] = function(block) {
  var statements_main = Blockly.JavaScript.statementToCode(block, 'main');
  var value_start_offset = Blockly.JavaScript.valueToCode(block, 'start_offset', Blockly.JavaScript.ORDER_ATOMIC);
  var code = '#dynamic ' + FormatVariable(value_start_offset) + "\n#org @start\n" + statements_main;
  return code;
};

Blockly.JavaScript['sixbyte'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code;
  if(WritingInDecimals)
  code = "0x" + text_value.toString(16);
  else code = "0x" +  text_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['byte'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  if(WritingInDecimals)
  code = "0x" + text_value.toString(16);
  else code = "0x" +  text_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['word'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  if(WritingInDecimals)
  code = "0x" + text_value.toString(16);
  else code = "0x" +  text_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dword'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  if(WritingInDecimals)
  code = "0x" + text_value.toString(16);
  else code = "0x" +  text_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['string'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = '= '+ text_value;
  code = FormatVariable(code);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['lock'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'lock\n';
  return code;
};

Blockly.JavaScript['faceplayer'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'faceplayer\n';
  return code;
};


Blockly.JavaScript['msgbox_simple'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var currentSub = GetSubName();
  var code = 'msgbox ' + currentSub + " " + dropdown_type;
  additionalContext += currentSub +"\n" + FormatVariable(value_text) + "\n";
  return code;
};

Blockly.JavaScript['msgbox_question'] = function(block) {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_yes = Blockly.JavaScript.statementToCode(block, 'yes');
  var textSub = GetSubName();
  var yesSub = GetSubName();
  var code = 'msgbox ' + textSub + " 0x5" +"\ncompare 0x800D 0x1\nif 0x1 goto " + yesSub +"\n";
  additionalContext += textSub +"\n" + FormatVariable(value_text) + "\n";
  additionalContext += yesSub +"\n" + FormatVariable(statements_yes) + "\n";
  return code;
};

Blockly.JavaScript['setvar'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // setvar 0x[Variable Number] 0x[Value To Set To]
  var code = 'setvar ' + FormatVariable(value_var) + ' '+ FormatVariable(value_value) +"\n";
  return code;
};

Blockly.JavaScript['addvar'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'addvar ' + FormatVariable(value_var) + ' '+ FormatVariable(value_value) +"\n";
  return code;
};

Blockly.JavaScript['subvar'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'subvar ' + FormatVariable(value_var) + ' '+ FormatVariable(value_value) +"\n";
  return code;
};

Blockly.JavaScript['comparevar'] = function(block) {
  var value_var = Blockly.JavaScript.valueToCode(block, 'var', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_compare = block.getFieldValue('compare');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // compare 0x[Variable Number] 0x[Value To Check For]
  // if 0x[More/Less/EqualTo] goto @pointer
  var code = 'compare ' + FormatVariable(value_var) + ' ' + FormatVariable(value_value) + '\n';
  var sub = GetSubName();
  code += 'if ' + FormatVariable(dropdown_compare) + ' goto ' + sub;
  additionalContext += sub +"\n" + FormatVariable(statements_do) + "\n";
  return code;
};

Blockly.JavaScript['warp'] = function(block) {
  var value_bank = Blockly.JavaScript.valueToCode(block, 'bank', Blockly.JavaScript.ORDER_ATOMIC);
  var value_number = Blockly.JavaScript.valueToCode(block, 'number', Blockly.JavaScript.ORDER_ATOMIC);
  var value_exit = Blockly.JavaScript.valueToCode(block, 'exit', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code;
  if(dropdown_type == '0')
    code = 'warp ';
  else if(dropdown_type == '1')
    code = 'warpmuted ';
  else if(dropdown_type == '2')
    code = 'warpwalk ';
  // warp 0x[Map Bank] 0x[Map Number] 0x[Warp Number] 0x[Map x] 0x[Map Y]
  code += FormatVariable(value_bank) + ' ' + FormatVariable(value_number) + ' '  + FormatVariable(value_exit) + ' '  + FormatVariable(value_x) + ' '  + FormatVariable(value_y) + '\n';
  return code;
};

Blockly.JavaScript['end'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'end\n';
  return code;
};

Blockly.JavaScript['release'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'release\n';
  return code;
};