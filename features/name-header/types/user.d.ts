// for github api
export type Commit = {
    sha: string,
    message: string,
    repo: string,
    date: string,
    url: string
};

export type CommitProps = {
    commits: Commit[];
}