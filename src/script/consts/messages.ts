export const IDE_NA = "N/A";
export const enum MESSAGES {
  IDE_SEMICOLON_ERR = 0,
  IDE_WRONG_NUMBER_ERR,
  IDE_NEGATIVE_NUMBER_ERR,
  IDE_UNSEQUENTAL_NUMBER_ERR,
  IDE_EMPTY_CODE_ERR,

  VAR_TOO_MANY_ERR,
  VAR_MEMORY_FULL_ERR,
  VAR_DEFINED_ERR,
  VAR_POINTER_ERR,

  CMD_END_ERR,
  CMD_LET_ERR,
  CMD_DIM_ERR,
  CMD_IF_ERR,
  CMD_MANY_THEN_ERR,
  CMD_VAR_OMIT_ERR,
  CMD_VAR_MANY_ERR,

  EXE_BRACKETS_ERR,
  EXE_QUOTES_ERR,
  EXE_NOT_DEFINED_ERR,
  EXE_MIXED_TYPES_ERR,
  EXE_BAD_EXPR_ERR,
  EXE_ZERO_DIV_ERR,
  EXE_COMPLITED_MSG,

  PARSE_LET_STR_NAME_ERR,
  PARST_LET_STR_RSLT_ERR,
  PARSE_LET_NUM_NAME_ERR,
  PARSE_LET_NUM_RSLT_ERR,
  PARSE_DIM_STR_NAME_ERR,
  PARSE_DIM_NUM_NAME_ERR,
  PARSE_DIM_NUM_RSLT_ERR,
  PARSE_DIM_SIZE_ERR,
  PARSE_DIM_ZERO_SIZE_ERR,

  PARSE_ASSIGN_IDX_ERR,
  PARSE_ASSIGN_STR_NAME_ERR,
  PARSE_ASSIGN_STR_RSLT_ERR,
  PARSE_ASSIGN_NUM_NAME_ERR,
  PARSE_ASSIGN_NUM_RSLT_ERR,
  PARSE_ASSIGN_NOT_DEFINED_ERR,

  PARSE_IF_NOT_BOOL_ERR,
  PARSE_IF_MANY_ELSE_ERR,

  PARSE_GOTO_NOT_NUM_ERR,
  PARSE_GOTO_LINE_UNKNOWN_ERR,

  PARSE_GOSUB_NOT_NUM_ERR,
  PARSE_GOSUB_LINE_UNKNOWN_ERR,

  PARSE_RETURN_ERR,
  PARSE_PRINT_ERR,

  PARSE_INPUT_EMPTY_ERR,

  UI_CONGRATULATIONS_MSG,

  EXE_LOOPING_MSG,

  UI_EXEC_LINE_MSG,
  UI_BAD_JS_CODE_START_ERR,
  UI_BAD_JS_CODE_LINE_ERR,
  UI_SNAPSHOT_MSG,

  UI_COMPARE_INPUT_ERR,
  UI_COMPARE_ERR,
  UI_COMPARE_SCREEN_ERR,
  UI_COMPARE_SCREEN_LINE_ERR,

  UI_COMPARE_RAM_ERR,
  UI_COMPARE_FINALLY_RAM_ERR,
  UI_PICK_THE_LEVEL,
  UI_GO_TO_THE_LEVEL,
}

export function makeMsg(
  ...args: [number, (string | number)?, (string | number)?]
): string {
  switch (args[0]) {
    case MESSAGES.IDE_SEMICOLON_ERR:
      return "WRONG SEMICOLON CHARACTER AT THE END OF THE LINE";
    case MESSAGES.IDE_WRONG_NUMBER_ERR:
      return "WRONG NUMBER AT THE BEGINNING OF THE LINE";
    case MESSAGES.IDE_NEGATIVE_NUMBER_ERR:
      return `ERROR ON LINE ${args[1]}: NEGATIVE LINE NUMBERS ARE NOT ALLOWED`;
    case MESSAGES.IDE_UNSEQUENTAL_NUMBER_ERR:
      return `LINES MUST HAVE SEQUENTAL NUMBERING (${args[1]} AFTER ${args[2]})`;
    case MESSAGES.IDE_EMPTY_CODE_ERR:
      return "CODE SPACE IS EMPTY";

    case MESSAGES.VAR_TOO_MANY_ERR:
      return "TOO MANY VARIABLES";
    case MESSAGES.VAR_MEMORY_FULL_ERR:
      return `NOT ENOUGH MEMORY FOR CREATING VARIABLE ${args[1]}`;
    case MESSAGES.VAR_DEFINED_ERR:
      return `VARIABLE ${args[1]} IS ALREADY DEFINED`;
    case MESSAGES.VAR_POINTER_ERR:
      return "NOT ENOUGH MEMORY TO STORE THE RETURN ADDRESS POINTER ON THE STACK";

    case MESSAGES.CMD_END_ERR:
      return "'END' COMMAND MUST BE WITHOUT PARAMETERS";
    case MESSAGES.CMD_LET_ERR:
      return "'LET' COMMAND BAD SYNTAX (POSSIBLY TOO MANY '=')";
    case MESSAGES.CMD_DIM_ERR:
      return "INCORRECT ARRAY CREATION (WHERE IS THE CORRECT SIZE?)";
    case MESSAGES.CMD_IF_ERR:
      return "'IF..THEN..[ELSE]' BAD SYNTAX (POSSIBLY 'THEN' OMMITED)";
    case MESSAGES.CMD_MANY_THEN_ERR:
      return "'IF..THEN..[ELSE]' BAD SYNTAX (POSSIBLY MORE THAN ONE 'THEN')";
    case MESSAGES.CMD_VAR_OMIT_ERR:
      return "ASSIGNMENT OPERATOR BAD SYNTAX (POSSIBLY '=' OMMITED)";
    case MESSAGES.CMD_VAR_MANY_ERR:
      return "ASSIGNMENT OPERATOR BAD SYNTAX (POSSIBLY MORE THAN ONE '=')";

    case MESSAGES.EXE_BRACKETS_ERR:
      return "ALL BRACKETS IN EXPRESSION MUST BE PAIRED";
    case MESSAGES.EXE_QUOTES_ERR:
      return "NOT ALL QUOTES ARE PAIRED";
    case MESSAGES.EXE_NOT_DEFINED_ERR:
      return `BAD EXPRESSION (VARIABLE ${args[1]} NOT DEFINED)`;
    case MESSAGES.EXE_MIXED_TYPES_ERR:
      return "BAD EXPRESSION (MIXED TYPES)";
    case MESSAGES.EXE_BAD_EXPR_ERR:
      return "BAD EXPRESSION";
    case MESSAGES.EXE_ZERO_DIV_ERR:
      return "DIVISION BY ZERO";

    case MESSAGES.EXE_COMPLITED_MSG:
      return "EXECUTION COMPLITED SUCCESSFULLY!";
    case MESSAGES.EXE_LOOPING_MSG:
      return `IT'S MORE THAN ${args[1]} STEPS ARE DOING. POSSIBLE LOOPING, FORCIBLY STOPPED.`;

    case MESSAGES.PARSE_LET_STR_NAME_ERR:
      return "STRING VARIABLE NAME MUST BE ONE CAPITAL LETTER WITH '$'";
    case MESSAGES.PARST_LET_STR_RSLT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT FOR STRING VARIABLE (STRING REQUIRED)";

    case MESSAGES.PARSE_LET_NUM_NAME_ERR:
      return "NUMERIC VARIABLE NAME MUST BE ONE CAPITAL LETTER";
    case MESSAGES.PARSE_LET_NUM_RSLT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT FOR NUMERIC VARIABLE (NUMBER REQUIRED)";

    case MESSAGES.PARSE_DIM_STR_NAME_ERR:
      return "STRING ARRAY NAME MUST BE ONE CAPITAL LETTER WITH '$'";
    case MESSAGES.PARSE_DIM_NUM_NAME_ERR:
      return "NUMERIC ARRAY NAME MUST BE ONE CAPITAL LETTER";
    case MESSAGES.PARSE_DIM_NUM_RSLT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT FOR ARRAY SIZE (NUMBER REQUIRED)";
    case MESSAGES.PARSE_DIM_SIZE_ERR:
      return "INCOMPATIBLE ARRAY SIZE (MUST BE POSITIVE NUMBER AND MAXIMUM 8 ELEMENTS)";
    case MESSAGES.PARSE_DIM_ZERO_SIZE_ERR:
      return "INCOMPATIBLE ARRAY SIZE (ZERO VALUE)";

    case MESSAGES.PARSE_ASSIGN_IDX_ERR:
      return "INCOMPATIBLE ARRAY INDEX (NUMBER REQUIRED)";
    case MESSAGES.PARSE_ASSIGN_STR_NAME_ERR:
      return "STRING ARRAY ELEMENT NAME MUST BE ONE CAPITAL LETTER WITH '$' AND ARRAY INDEX IN BRACKETS";
    case MESSAGES.PARSE_ASSIGN_STR_RSLT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT (STRING REQUIRED)";
    case MESSAGES.PARSE_ASSIGN_NUM_NAME_ERR:
      return "NUMERIC ARRAY ELEMENT NAME MUST BE ONE CAPITAL LETTER WITH ARRAY INDEX IN BRACKETS";
    case MESSAGES.PARSE_ASSIGN_NUM_RSLT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT (NUMBER REQUIRED)";
    case MESSAGES.PARSE_ASSIGN_NOT_DEFINED_ERR:
      return `VARIABLE ${args[1]} MUST BE DEFINED FIRST`;

    case MESSAGES.PARSE_IF_NOT_BOOL_ERR:
      return "EXPRESSION RESULT MUST BE OF BOOLEAN TYPE";
    case MESSAGES.PARSE_IF_MANY_ELSE_ERR:
      return "TOO MANY 'ELSE' (SHOULD BE ONE OR ZERO)";

    case MESSAGES.PARSE_GOTO_NOT_NUM_ERR:
      return "INCOMPATIBLE GOTO DESTINATION (NUMBER REQUIRED)";
    case MESSAGES.PARSE_GOTO_LINE_UNKNOWN_ERR:
      return `INCOMPATIBLE GOTO DESTINATION (UNKNOWN LINE NUMBER ${args[1]})`;

    case MESSAGES.PARSE_GOSUB_NOT_NUM_ERR:
      return "INCOMPATIBLE GOSUB DESTINATION (NUMBER REQUIRED)";
    case MESSAGES.PARSE_GOSUB_LINE_UNKNOWN_ERR:
      return `INCOMPATIBLE GOSUB DESTINATION (UNKNOWN LINE NUMBER ${args[1]})`;

    case MESSAGES.PARSE_RETURN_ERR:
      return "NO MORE RETURN ADRESSES ON THE STACK";

    case MESSAGES.PARSE_PRINT_ERR:
      return "INCOMPATIBLE EXPRESSION RESULT FOR PRINTING (POSSIBLY BOOLEAN)";

    case MESSAGES.PARSE_INPUT_EMPTY_ERR:
      return "INPUT VALUES LIST IS EMPTY NOW";

    case MESSAGES.UI_CONGRATULATIONS_MSG:
      return "CONGRATULATION! COMPARED PROGRAMS ARE IDENTICAL";
    case MESSAGES.UI_EXEC_LINE_MSG:
      return `EXECUTED LINE:\n${args[1]}`;
    case MESSAGES.UI_BAD_JS_CODE_START_ERR:
      return `INPUT DATA: BAD JS CODE STARTED AT LINE ${args[1]}`;
    case MESSAGES.UI_BAD_JS_CODE_LINE_ERR:
      return `INPUT DATA: BAD ONE-STRING JS CODE PLACED AT LINE ${args[1]}`;
    case MESSAGES.UI_SNAPSHOT_MSG:
      return `SNAPSHOT ${args[1]} OF ${args[2]}`;
    case MESSAGES.UI_COMPARE_INPUT_ERR:
      return "ERROR IN COMPARED PROGRAM: TOO MANY INPUT COMMANDS";
    case MESSAGES.UI_COMPARE_ERR:
      return `ERROR IN COMPARED PROGRAM:\n${args[1]}`;
    case MESSAGES.UI_COMPARE_SCREEN_ERR:
      return "COMPARED PROGRAMS ARE NOT IDENTICAL BY SCREEN CHECK:\nTHE COUNT OF PRINTED LINES DOES NOT MATCH";
    case MESSAGES.UI_COMPARE_SCREEN_LINE_ERR:
      return `COMPARED PROGRAMS ARE NOT IDENTICAL BY SCREEN CHECK:\nDID NOT MATCH ON THE SCREEN LINE ${args[1]}`;
    case MESSAGES.UI_COMPARE_RAM_ERR:
      return "COMPARED PROGRAMS ARE NOT IDENTICAL BY RAM CHECK";
    case MESSAGES.UI_COMPARE_FINALLY_RAM_ERR:
      return "COMPARED PROGRAMS ARE NOT IDENTICAL BY RAM CHECK:\nFINALLY STATES OF RAM DID NOT MATCH";
    case MESSAGES.UI_PICK_THE_LEVEL:
      return `LEVEL ${args[1]}: ${args[2]}`;
    case MESSAGES.UI_GO_TO_THE_LEVEL:
      return "Go";
    default:
      return "UNKNOWN ERROR!";
  }
}

export function throwError(
  line: string,
  ...args: [number, (string | number)?, (string | number)?]
): void {
  throw new Error(`ERROR IN LINE ${line}: ${makeMsg(...args)}`);
}
