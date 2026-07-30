export interface ProjectInformation {
    icon: React.ReactNode,
    link: string,
} // for "my works" project items

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