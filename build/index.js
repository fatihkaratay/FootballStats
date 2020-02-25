"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./ReportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// create and onject that satidsfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create and instance of MarchReader and pass in somethins satisfying
// the 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
