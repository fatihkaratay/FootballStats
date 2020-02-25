import { MatchData } from "./MatchData";
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './ReportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }

  static winsAnalysisWithHtmlReport (team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    );
  }
}
