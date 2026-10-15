import { useEffect, useRef, useState } from 'react';

function Header(props){
  return (
    <div className='header'>
        <button className='first text-button' onClick={props.onToggleMenu} aria-expanded={props.menuOpen} aria-controls="side-menu">Menu
            <img style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNxdWFyZS1tZW51IHByZXZpZXctaWNvbiI+PHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB4PSIzIiB5PSIzIiByeD0iMiIvPjxwYXRoIGQ9Ik03IDhoMTAiLz48cGF0aCBkPSJNNyAxMmgxMCIvPjxwYXRoIGQ9Ik03IDE2aDEwIi8+PC9zdmc+"></img>
        </button>
        <p className='second'>My Bank</p>
        <button className="third text-button" onClick={props.onToggleProfile} aria-expanded={props.profileOpen} aria-controls="profile-menu">
            <img style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXIgcHJldmlldy1pY29uIj48cGF0aCBkPSJNMTkgMjF2LTJhNCA0IDAgMCAwLTQtNEg5YTQgNCAwIDAgMC00IDR2MiIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNyIgcj0iNCIvPjwvc3ZnPg=="></img>
            Ibrahim
        </button>
    </div>
  )
}

function SideMenu(props) {
    if (props.isClicked){
        return (
        <aside className="side-menu" id="side-menu">
        <nav aria-label="Main menu">
            <button className="menu-item active">Home</button>
            <button className="menu-item">
            Accounts and cards <span>⌄</span>
            </button>
            <button className="menu-item">
            Payments and transfers <span>⌄</span>
            </button>
            <button className="menu-item">
            Savings and investments <span>⌄</span>
            </button>
            <button className="menu-item">
            Pensions and insurance <span>⌄</span>
            </button>
            <button className="menu-item">
            Loans <span>⌄</span>
            </button>
            <button className="menu-item">Products and services</button>
        </nav>
        </aside>
        );
    } else {
        return null;
    }
  
}

function ProfileMenu(props) {
    if (!props.isOpen) {
        return null;
    }

    return (
        <aside className="side-menu profile-menu" id="profile-menu" aria-label="Profile menu">
            <div className="profile-summary">
                <span className="profile-initials" aria-hidden="true">IM</span>
                <div>
                    <strong>Logged in as</strong>
                    <p>Ibrahim Mehkri</p>
                </div>
                <button className="profile-close text-button" onClick={props.onClose} aria-label="Close profile menu">×</button>
            </div>
            <nav aria-label="Profile options">
                <button className="menu-item">My details</button>
                <button className="menu-item">Notifications</button>
                <button className="menu-item">Messages</button>
                <button className="menu-item">Documents and agreements</button>
                <button className="menu-item">Powers of attorney</button>
                <button className="menu-item">Meetings</button>
                <button className="menu-item">BankID and security solutions</button>
            </nav>
        </aside>
    );
}

function QuickTransfer(props) {
    const dialogRef = useRef(null);

    useEffect(function() {
        const dialog = dialogRef.current;
        dialog.showModal();
        return function() {
            dialog.close();
        };
    }, []);

    return (
        <dialog className="transfer-dialog" ref={dialogRef} onCancel={props.onClose} aria-labelledby="transfer-title">
            <div className="transfer-heading">
                <h2 id="transfer-title">Transfer between your accounts</h2>
                <button type="button" className="text-button" onClick={props.onClose} aria-label="Close quick transfer">×</button>
            </div>
            <div className="transfer-fields">
                <label>From
                    <select defaultValue="">
                        <option value="" disabled>Select an account</option>
                        <option value="private">Private account · 1234 56 789 01</option>
                        <option value="savings">Savings account · 2345 67 890 12</option>
                        <option value="isk">ISK account · 3456 78 901 23</option>
                    </select>
                </label>
                <label>To
                    <select defaultValue="">
                        <option value="" disabled>Select an account</option>
                        <option value="private">Private account · 1234 56 789 01</option>
                        <option value="savings">Savings account · 2345 67 890 12</option>
                        <option value="isk">ISK account · 3456 78 901 23</option>
                    </select>
                </label>
                <label>Amount (SEK)
                    <input type="number" min="0.01" step="0.01" />
                </label>
                <label>Message (optional)
                    <input type="text" maxLength={12} />
                    <span className="transfer-hint">Up to 12 characters</span>
                </label>
            </div>
            <p className="transfer-demo-note">Interface preview — transfers are not available yet.</p>
            <div className="transfer-actions">
                <button type="button" className="change-button" onClick={props.onClose}>Cancel</button>
                <button type="button" className="payment-button" disabled>Transfer</button>
            </div>
        </dialog>
    );
}

function FavoriteAccountsSection(props) {
    const [transferOpen, setTransferOpen] = useState(false);

    function openTransfer() {
        setTransferOpen(true);
    }

    function closeTransfer() {
        setTransferOpen(false);
    }

    return (
        <div className="favorite-accounts-section">
            <div className="favorite-accounts-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <h3>Favorite accounts</h3>
                    <button className="change-button">
                        <img  style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNldHRpbmdzLTIgcHJldmlldy1pY29uIj48cGF0aCBkPSJNMTQgMTdINSIvPjxwYXRoIGQ9Ik0xOSA3aC05Ii8+PGNpcmNsZSBjeD0iMTciIGN5PSIxNyIgcj0iMyIvPjxjaXJjbGUgY3g9IjciIGN5PSI3IiByPSIzIi8+PC9zdmc+"></img>
                        Change
                    </button>
                </div>
                <AccountInfo accountName="Private account" accountNumber="1234 56 789 01" balance="24,780.66 SEK" onOpen={props.onOpenAccount}/>
                <AccountInfo accountName="Savings account" accountNumber="2345 67 890 12" balance="57,501.29 SEK" />
                <AccountInfo accountName="ISK account" accountNumber="3456 78 901 23" balance="112,350.00 SEK"/>
                <div className="fv-card-bottom-btn-set">
                    <button className="change-button" onClick={openTransfer}>
                        <img style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWFycm93LWxlZnQtcmlnaHQgcHJldmlldy1pY29uIj48cGF0aCBkPSJNOCAzIDQgN2w0IDQiLz48cGF0aCBkPSJNNCA3aDE2Ii8+PHBhdGggZD0ibTE2IDIxIDQtNC00LTQiLz48cGF0aCBkPSJNMjAgMTdINCIvPjwvc3ZnPg=="></img>
                        Quick transfers
                    </button>
                    <button style={{ fontSize: "14px" }} className="text-button">Upcoming transactions</button>
                    <button style={{ fontSize: "14px", justifySelf: "end" }} className="text-button">
                        Show all accounts
                        <img style={{ width: "15px", height: "15px" }} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vdmUtcmlnaHQgcHJldmlldy1pY29uIj48cGF0aCBkPSJNMTggOEwyMiAxMkwxOCAxNiIvPjxwYXRoIGQ9Ik0yIDEySDIyIi8+PC9zdmc+"></img>
                    </button>
                </div>
            </div>
            <div className="tasks-card">
                <h3>Tasks</h3>
                <p style={{ fontSize: "14px" }}>You dont have any pending tasks at the moment</p>
            </div>
            {transferOpen && <QuickTransfer onClose={closeTransfer} />}
        </div>
    ) 
}

function AccountInfo(props){
    return (
        <div className="account-info">
            <div>
                <h4>{props.onOpen ? <button className="account-open text-button" onClick={props.onOpen}>{props.accountName}</button> : props.accountName}</h4>
                <p>{props.accountNumber}</p>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <h4>{props.balance}</h4>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tcmlnaHQgcHJldmlldy1pY29uIj48cGF0aCBkPSJtOSAxOCA2LTYtNi02Ii8+PC9zdmc+"></img>
            </div>
        </div>
    )
}

function PrivateAccountPage(props) {
    const transactions = [
        { id: 1, date: '2026-10-15', description: 'Grocery store', amount: '-420.50', balance: '24,780.66' },
        { id: 2, date: '2026-10-14', description: 'Monthly travel pass', amount: '-1,060.00', balance: '25,201.16' },
        { id: 3, date: '2026-10-13', description: 'Salary', amount: '+28,000.00', balance: '26,261.16' },
    ];

    return (
        <main className="private-account-page">
            <button className="text-button account-back" onClick={props.onBack}>← Back to my accounts</button>
            <h1>Private account</h1>
            <p className="account-number">1234 56 789 01</p>
            <p>Available balance</p>
            <h2 className="account-balance">24,780.66 SEK</h2>
            <section className="account-transactions" aria-labelledby="transactions-heading">
                <h2 id="transactions-heading">Transactions</h2>
                <p className="transaction-note">Sample transactions for this prototype. All amounts are in SEK.</p>
                <div className="transaction-table-scroll">
                    <table>
                        <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Amount</th><th scope="col">Balance</th></tr></thead>
                        <tbody>
                            {transactions.map(function(transaction) {
                                return <tr key={transaction.id}><td>{transaction.date}</td><td>{transaction.description}</td><td>{transaction.amount}</td><td>{transaction.balance}</td></tr>;
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

function MainContent(props){
    return (
        <div style={{ margin: "5% 10% 5% 10%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Hello Ibrahim</h3>
                <button className="payment-button">Payment and transfers</button>
            </div>
            <FavoriteAccountsSection onOpenAccount={props.onOpenAccount} />
        </div>
        
    )
}



export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [accountOpen, setAccountOpen] = useState(false);

    function openAccount() {
        setAccountOpen(true);
        setMenuOpen(false);
        setProfileOpen(false);
    }

    function closeAccount() {
        setAccountOpen(false);
    }

    function toggleMenu() {
        setProfileOpen(false);
        setMenuOpen(function(previousValue) {
            return !previousValue;
        });
    }

    function toggleProfile() {
        setMenuOpen(false);
        setProfileOpen(function(previousValue) {
            return !previousValue;
        });
    }

    function closeProfile() {
        setProfileOpen(false);
    }

    return (
        <>
            <Header menuOpen={menuOpen} onToggleMenu={toggleMenu} profileOpen={profileOpen} onToggleProfile={toggleProfile} />
            {accountOpen ? <PrivateAccountPage onBack={closeAccount} /> : <MainContent onOpenAccount={openAccount} />}
            <SideMenu isClicked={menuOpen} />
            {profileOpen && <button className="profile-backdrop" onClick={closeProfile} aria-label="Close profile menu" />}
            <ProfileMenu isOpen={profileOpen} onClose={closeProfile} />
        </>
    )
}
