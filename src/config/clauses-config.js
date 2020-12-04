export default {
  text: [{
    id: "eq",
    display: "Equals",
    requires: ["value"],
    component: 'Equals',
  }, {
    id: "dne",
    display: "Does Not Equal",
    requires: ["value"],
    component: 'DoesNotEqual'
  }, {
    id: "sw",
    display: "Starts With",
    requires: ["value"],
    component: 'StartsWith',
  }, {
    id: "ew",
    display: "Ends With",
    requires: ["value"],
    component: 'EndsWith',
  }, {
    id: "dsw",
    display: "Does Not Start With",
    requires: ["value"],
    component: 'DoesNotStartWith',
  }, {
    id: "dew",
    display: "Does Not End With",
    requires: ["value"],
    component: 'DoesNotEndWith',
  }, {
    id: "cont",
    display: "Contains",
    requires: ["value"],
    component: 'Contains',
  }, {
    id: "dcont",
    display: "Does Not Contain",
    requires: ["value"],
    component: 'DoesNotContain',
  }, {
    id: "st",
    display: "Is Set",
    requires: [],
    component: 'IsSet',
  }, {
    id: "nst",
    display: "Is Not Set",
    requires: [],
    component: 'IsNotSet',
  }],
  numeric: [{
    id: "eq",
    display: "Is Equal To",
    requires: ["value1"],
    component: 'IsEqualTo',
  }, {
    id: "dne",
    display: "Is Not Equal To",
    requires: ["value1"],
    component: 'IsNotEqualTo',
  }, {
    id: "gt",
    display: "Is Greater Than",
    requires: ["value1"],
    component: 'IsGreaterThan',
  }, {
    id: "gte",
    display: "Is Greater Than Or Equal To",
    requires: ["value1"],
    component: 'IsGreaterThanOrEqualTo',
  }, {
    id: "lt",
    display: "Is Less Than",
    requires: ["value1"],
    component: 'IsLessThan',
  }, {
    id: "lte",
    display: "Is Less Than Or Equal To",
    requires: ["value1"],
    component: 'IsLessThanOrEqualTo',
  }, {
    id: "btwn",
    display: "Is Between",
    requires: ["value1",
               "value2"],
    component: 'IsBetween',
  }, {
    id: "nbtwn",
    display: "Is Not Between",
    requires: ["value1",
               "value2"],
    component: 'IsNotBetween',
  }, {
    id: "st",
    display: "Is Set",
    requires: [],
    component: 'IsSet',
  }, {
    id: "nst",
    display: "Is Not Set",
    requires: [],
    component: 'IsNotSet',
  }],
  date: [{
    id: "eq",
    display: "Is Equal To",
    requires: ["date1"]
  }, {
    id: "dne",
    display: "Is Not Equal To",
    requires: ["date1"]
  }, {
    id: "lte",
    display: "Is On or Before",
    requires: ["date1"]
  }, {
    id: "gte",
    display: "Is On or After",
    requires: ["date1"]
  }, {
    id: "btwn",
    display: "Is Between",
    requires: ["date1",
               "date2"]
  }, {
    id: "gt",
    display: "Is More Than",
    requires: ["days",
               "direction"]
  }, {
    id: "exct",
    display: "Is Exactly",
    requires: ["days",
               "direction"]
  }, {
    id: "lt",
    display: "Is Less Than",
    requires: ["days",
               "direction"]
  }, {
    id: "st",
    display: "Is Set",
    requires: []
  }, {
    id: "nst",
    display: "Is Not Set",
    requires: []}],
  option: [{
    id: "eq",
    display: "Is",
    selectable: 1,
    requires: ["selected"]
  }, {
    id: "dne",
    display: "Is Not",
    selectable: 1,
    requires: ["selected"]
  }, {
    id: "in",
    display: "Is One Of",
    selectable: 2,
    requires: ["selected"]
  }, {
    id: "nin",
    display: "Is Not One Of",
    selectable: 2,
    requires: ["selected"]
  }, {
    id: "st",
    display: "Is Set",
    selectable: 0,
    requires: []
  }, {
    id: "nst",
    display: "Is Not Set",
    selectable: 0,
    requires: []}],
};
