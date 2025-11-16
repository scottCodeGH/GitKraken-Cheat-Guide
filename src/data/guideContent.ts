import { GuideSection } from '@/types';

export const guideContent: GuideSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of GitKraken and set up your first repository',
    icon: 'Rocket',
    subsections: [
      {
        id: 'installation',
        title: 'Installation & Setup',
        content: 'GitKraken is a cross-platform Git GUI client that makes working with Git repositories visual and intuitive. Download GitKraken from the official website and install it on your system (Windows, Mac, or Linux).',
        tips: [
          'GitKraken offers both free and paid versions with additional features',
          'Sign in with GitHub, GitLab, Bitbucket, or Azure DevOps for seamless integration',
          'Enable GPG signing for enhanced security on your commits',
        ],
        examples: [
          {
            title: 'First-time Setup',
            description: 'Configure your Git identity',
            steps: [
              'Open GitKraken preferences (File > Preferences or Cmd/Ctrl + ,)',
              'Navigate to Profiles section',
              'Enter your name and email address',
              'Configure your preferred editor and merge tool',
            ],
          },
        ],
      },
      {
        id: 'opening-repos',
        title: 'Opening & Cloning Repositories',
        content: 'GitKraken provides multiple ways to start working with repositories. You can open existing local repositories, clone remote repositories, or initialize new ones.',
        shortcuts: [
          { keys: ['Ctrl', 'O'], description: 'Open a repository', platform: 'windows' },
          { keys: ['Cmd', 'O'], description: 'Open a repository', platform: 'mac' },
          { keys: ['Ctrl', 'N'], description: 'Initialize new repository', platform: 'windows' },
          { keys: ['Cmd', 'N'], description: 'Initialize new repository', platform: 'mac' },
        ],
        examples: [
          {
            title: 'Clone a Repository',
            description: 'Clone a remote repository to your local machine',
            steps: [
              'Click "Clone a repo" in the repository management panel',
              'Choose your hosting service (GitHub, GitLab, etc.)',
              'Select the repository from the list or paste a URL',
              'Choose the destination folder',
              'Click "Clone the repo"',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'interface',
    title: 'Interface Overview',
    description: 'Understand the GitKraken interface and navigation',
    icon: 'Layout',
    subsections: [
      {
        id: 'commit-graph',
        title: 'The Commit Graph',
        content: 'The centerpiece of GitKraken is the visual commit graph. It displays your repository\'s history as an interactive, visual tree structure showing branches, commits, and their relationships.',
        tips: [
          'Each node represents a commit with its SHA, author, and message',
          'Branches are color-coded for easy identification',
          'Drag and drop to perform Git operations like merge and rebase',
          'Right-click any commit for context-specific actions',
        ],
        examples: [
          {
            title: 'Reading the Graph',
            description: 'Understanding the visual elements',
            steps: [
              'Vertical lines represent branches',
              'Circles represent commits',
              'Branch labels appear at the tip of each branch',
              'Tags are shown as labels on specific commits',
              'Merges appear where branches converge',
            ],
          },
        ],
      },
      {
        id: 'left-panel',
        title: 'Left Panel - Repository Structure',
        content: 'The left panel shows your repository structure including local and remote branches, pull requests, tags, stashes, and submodules.',
        tips: [
          'Click on any branch to view its commits in the graph',
          'Right-click for context menu with branch operations',
          'Use the filter box to search for specific branches',
          'Expand sections to see more details',
        ],
      },
      {
        id: 'right-panel',
        title: 'Right Panel - File Changes',
        content: 'The right panel displays file changes, allowing you to stage files, view diffs, and create commits. It also shows details of selected commits.',
        tips: [
          'Stage individual files or chunks by clicking the file',
          'View side-by-side or inline diffs',
          'Discard changes directly from the file list',
          'Use the search box to filter files',
        ],
      },
    ],
  },
  {
    id: 'basic-operations',
    title: 'Basic Git Operations',
    description: 'Core Git commands and workflows in GitKraken',
    icon: 'GitBranch',
    subsections: [
      {
        id: 'staging-committing',
        title: 'Staging & Committing',
        content: 'Making commits in GitKraken is intuitive and visual. Stage your changes, write a meaningful commit message, and commit to your current branch.',
        shortcuts: [
          { keys: ['Ctrl', 'Enter'], description: 'Commit staged files', platform: 'windows' },
          { keys: ['Cmd', 'Enter'], description: 'Commit staged files', platform: 'mac' },
        ],
        tips: [
          'Stage all files by clicking "Stage all changes"',
          'Stage individual files by clicking the file name',
          'Use conventional commit messages for better history',
          'Review your diff before committing',
        ],
        examples: [
          {
            title: 'Creating a Commit',
            description: 'Standard commit workflow',
            steps: [
              'Make changes to your files',
              'View unstaged files in the right panel',
              'Click files to stage them (or "Stage all changes")',
              'Enter a commit message in the message box',
              'Click "Commit changes" button',
            ],
          },
        ],
      },
      {
        id: 'pushing-pulling',
        title: 'Push & Pull',
        content: 'Sync your local repository with remote repositories by pushing your commits and pulling changes from others.',
        shortcuts: [
          { keys: ['Ctrl', 'P'], description: 'Push', platform: 'windows' },
          { keys: ['Cmd', 'P'], description: 'Push', platform: 'mac' },
          { keys: ['Ctrl', 'Shift', 'P'], description: 'Pull', platform: 'windows' },
          { keys: ['Cmd', 'Shift', 'P'], description: 'Pull', platform: 'mac' },
        ],
        tips: [
          'Always pull before pushing to avoid conflicts',
          'Use "Pull (fast-forward if possible)" for cleaner history',
          'GitKraken shows if your branch is ahead/behind remote',
        ],
      },
      {
        id: 'viewing-history',
        title: 'Viewing History & Diffs',
        content: 'Explore your repository history, compare commits, and view file changes over time.',
        tips: [
          'Click any commit to see its details and file changes',
          'Use the blame feature to see who changed each line',
          'Compare any two commits by selecting them',
          'Search commit messages using the search bar',
        ],
      },
    ],
  },
  {
    id: 'branching',
    title: 'Branching Strategies',
    description: 'Master branch creation, management, and workflows',
    icon: 'GitMerge',
    subsections: [
      {
        id: 'creating-branches',
        title: 'Creating Branches',
        content: 'Branches allow you to work on features or fixes in isolation. GitKraken makes branch creation visual and simple.',
        shortcuts: [
          { keys: ['Ctrl', 'B'], description: 'Create new branch', platform: 'windows' },
          { keys: ['Cmd', 'B'], description: 'Create new branch', platform: 'mac' },
        ],
        tips: [
          'Use descriptive branch names (e.g., feature/user-auth)',
          'Branch from the correct starting point (usually main/master)',
          'Follow your team\'s naming conventions',
        ],
        examples: [
          {
            title: 'Create a Feature Branch',
            description: 'Start working on a new feature',
            steps: [
              'Right-click the commit where you want to branch from',
              'Select "Create branch here"',
              'Enter a descriptive branch name',
              'GitKraken automatically checks out the new branch',
            ],
          },
        ],
      },
      {
        id: 'switching-branches',
        title: 'Switching Branches',
        content: 'Easily switch between branches to work on different features or review code.',
        shortcuts: [
          { keys: ['Ctrl', 'K'], description: 'Quick checkout branch', platform: 'windows' },
          { keys: ['Cmd', 'K'], description: 'Quick checkout branch', platform: 'mac' },
        ],
        tips: [
          'Commit or stash changes before switching branches',
          'Use the fuzzy finder for quick branch switching',
          'GitKraken shows which branch is currently checked out',
        ],
      },
      {
        id: 'deleting-branches',
        title: 'Deleting Branches',
        content: 'Clean up merged or unnecessary branches to keep your repository organized.',
        tips: [
          'Delete local branches that have been merged',
          'Use "Delete branch and remote" to clean up both',
          'GitKraken warns if deleting unmerged branches',
        ],
        examples: [
          {
            title: 'Delete a Merged Branch',
            description: 'Remove a branch after merging',
            steps: [
              'Right-click the branch in the left panel',
              'Select "Delete [branch-name]"',
              'Confirm the deletion',
              'Optionally delete the remote branch as well',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'merging',
    title: 'Merging & Conflicts',
    description: 'Combine branches and resolve merge conflicts',
    icon: 'GitPullRequest',
    subsections: [
      {
        id: 'merge-basics',
        title: 'Merging Branches',
        content: 'Merging integrates changes from one branch into another. GitKraken provides a visual drag-and-drop interface for merging.',
        tips: [
          'Always merge from a clean working directory',
          'Review changes before merging',
          'Use fast-forward merges when possible for linear history',
        ],
        examples: [
          {
            title: 'Merge Feature Branch into Main',
            description: 'Standard merge workflow',
            steps: [
              'Checkout the target branch (e.g., main)',
              'Drag the feature branch onto the target branch',
              'Select "Merge [branch] into [target]"',
              'Resolve any conflicts if they arise',
              'Commit the merge',
            ],
          },
        ],
      },
      {
        id: 'conflict-resolution',
        title: 'Resolving Conflicts',
        content: 'When Git can\'t automatically merge changes, conflicts occur. GitKraken provides an excellent merge conflict editor to resolve them.',
        tips: [
          'Take time to understand both changes before resolving',
          'Use the built-in merge tool for visual conflict resolution',
          'Test your code after resolving conflicts',
          'Communicate with teammates about complex conflicts',
        ],
        examples: [
          {
            title: 'Resolve a Merge Conflict',
            description: 'Step-by-step conflict resolution',
            steps: [
              'GitKraken highlights conflicted files in red',
              'Click a conflicted file to open the merge tool',
              'Review "theirs" (incoming) and "yours" (current) changes',
              'Choose sections to keep or edit manually',
              'Mark as resolved and commit the merge',
            ],
          },
        ],
      },
      {
        id: 'merge-tools',
        title: 'External Merge Tools',
        content: 'GitKraken integrates with external merge tools for advanced conflict resolution.',
        tips: [
          'Configure your preferred merge tool in Preferences',
          'Popular options: VS Code, Sublime Merge, KDiff3',
          'Launch external tool from conflict interface',
        ],
      },
    ],
  },
  {
    id: 'rebasing',
    title: 'Rebasing',
    description: 'Keep your branch history clean with rebasing',
    icon: 'Shuffle',
    subsections: [
      {
        id: 'rebase-basics',
        title: 'Interactive Rebase',
        content: 'Rebasing rewrites commit history by moving, combining, or editing commits. It\'s powerful for maintaining a clean project history.',
        tips: [
          'Never rebase commits that have been pushed to shared branches',
          'Use rebase to clean up feature branch history before merging',
          'Interactive rebase lets you squash, edit, or reorder commits',
        ],
        examples: [
          {
            title: 'Rebase Feature Branch',
            description: 'Update feature branch with main branch changes',
            steps: [
              'Checkout your feature branch',
              'Drag your feature branch onto main branch',
              'Select "Rebase [feature] onto main"',
              'Resolve any conflicts that arise',
              'Continue rebase until complete',
            ],
          },
        ],
      },
      {
        id: 'squashing',
        title: 'Squashing Commits',
        content: 'Combine multiple commits into a single, clean commit before merging.',
        tips: [
          'Squash WIP and fix commits into meaningful commits',
          'Keep commit messages descriptive after squashing',
          'Use squash merge when merging PRs for clean history',
        ],
        examples: [
          {
            title: 'Squash Multiple Commits',
            description: 'Clean up commit history',
            steps: [
              'Right-click the oldest commit to include',
              'Select "Squash [X] commits"',
              'Select all commits to squash together',
              'Write a new commit message',
              'Confirm the squash operation',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'stashing',
    title: 'Stashing Changes',
    description: 'Temporarily save work without committing',
    icon: 'Archive',
    subsections: [
      {
        id: 'stash-basics',
        title: 'Creating Stashes',
        content: 'Stashing lets you save uncommitted changes temporarily, useful when switching branches or pulling updates.',
        shortcuts: [
          { keys: ['Ctrl', 'Shift', 'S'], description: 'Stash changes', platform: 'windows' },
          { keys: ['Cmd', 'Shift', 'S'], description: 'Stash changes', platform: 'mac' },
        ],
        tips: [
          'Name your stashes for easy identification',
          'Stash includes both staged and unstaged changes',
          'Use "Stash all changes including untracked"for complete save',
        ],
        examples: [
          {
            title: 'Stash Your Work',
            description: 'Save changes before switching context',
            steps: [
              'Click the "Stash" icon in the toolbar',
              'Optionally add a stash message',
              'Select "Stash all changes"',
              'Your working directory is now clean',
              'Find your stash in the left panel under "Stashes"',
            ],
          },
        ],
      },
      {
        id: 'applying-stashes',
        title: 'Applying & Managing Stashes',
        content: 'Retrieve stashed changes when you\'re ready to continue working on them.',
        tips: [
          'Apply stash keeps the stash for later use',
          'Pop stash applies and removes it from the list',
          'You can apply stashes to any branch',
        ],
        examples: [
          {
            title: 'Apply a Stash',
            description: 'Restore previously stashed changes',
            steps: [
              'Find the stash in the left panel',
              'Right-click the stash',
              'Select "Apply stash" or "Pop stash"',
              'Resolve any conflicts if they occur',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'remote-repos',
    title: 'Remote Repositories',
    description: 'Work with GitHub, GitLab, and other remotes',
    icon: 'Cloud',
    subsections: [
      {
        id: 'adding-remotes',
        title: 'Adding Remotes',
        content: 'Remotes are versions of your repository hosted on servers. GitKraken makes it easy to add and manage multiple remotes.',
        tips: [
          'Origin is typically your primary remote',
          'Add upstream remote for forked repositories',
          'Use SSH for better security',
        ],
        examples: [
          {
            title: 'Add a Remote',
            description: 'Connect to a remote repository',
            steps: [
              'Click the "+" next to "Remote" in left panel',
              'Enter remote name (e.g., upstream)',
              'Enter the remote URL',
              'Click "Add Remote"',
            ],
          },
        ],
      },
      {
        id: 'fetch-pull',
        title: 'Fetching & Pulling',
        content: 'Fetch downloads remote changes without merging. Pull fetches and merges in one operation.',
        tips: [
          'Fetch regularly to see remote changes',
          'Review fetched commits before pulling',
          'Use "Pull (rebase)" to avoid merge commits',
        ],
      },
      {
        id: 'pull-requests',
        title: 'Pull Requests',
        content: 'Create, review, and manage pull requests directly from GitKraken with GitHub, GitLab, and Bitbucket integration.',
        tips: [
          'Connect your GitHub/GitLab account for PR features',
          'View PR details and comments in GitKraken',
          'Checkout PR branches for local testing',
          'Approve or request changes directly',
        ],
        examples: [
          {
            title: 'Create a Pull Request',
            description: 'Submit your changes for review',
            steps: [
              'Push your feature branch to remote',
              'Click the "+" next to Pull Requests',
              'Select source and target branches',
              'Enter title and description',
              'Add reviewers and labels',
              'Click "Create Pull Request"',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features',
    description: 'Pro tips and advanced GitKraken capabilities',
    icon: 'Sparkles',
    subsections: [
      {
        id: 'git-flow',
        title: 'Git Flow',
        content: 'GitKraken supports Git Flow, a branching model for managing releases and features.',
        tips: [
          'Initialize Git Flow from the left panel',
          'Automatically creates feature, release, and hotfix branches',
          'Follows best practices for branch management',
        ],
      },
      {
        id: 'submodules',
        title: 'Submodules',
        content: 'Manage Git submodules visually within GitKraken.',
        tips: [
          'Add submodules from the left panel',
          'Update submodules with one click',
          'View submodule status in the graph',
        ],
      },
      {
        id: 'file-history',
        title: 'File History & Blame',
        content: 'Track changes to individual files over time and see who made each change.',
        tips: [
          'Right-click any file and select "File History"',
          'Use "File Blame" to see line-by-line authors',
          'Compare file versions across commits',
        ],
      },
      {
        id: 'integrations',
        title: 'Integrations',
        content: 'GitKraken integrates with popular development tools and services.',
        tips: [
          'Connect to Jira for issue tracking',
          'Link commits to Trello cards',
          'Use GitLab/GitHub CI integration',
          'Configure webhooks for automation',
        ],
      },
    ],
  },
];
