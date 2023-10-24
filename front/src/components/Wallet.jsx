import { useState } from "react";
import { TableRow, TableHead, Table, TableBody, TableContainer, TableCell, IconButton, Tooltip, CardContent, ListItemButton, CardHeader, Card, Container, ListItemIcon, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VisibilityIcon from '@mui/icons-material/Visibility';


const accountsTable = ["Name", "Number", "Balance", "Date Closed"]

function Wallet(props) {
    const [open, setOpen] = useState(false);
    const [isHideBalance, setBalanceVisibility] = useState(true);

    const handleClick = () => { setOpen(!open); }
    const hideBalance = () => { setBalanceVisibility(!isHideBalance) }

    return (
        <Container sx={{ p: 4 }}>
            <Card sx={{ boxShadow: 4 }}>
                <CardHeader title="Wallet" />
                <CardContent>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <AccountBalanceWalletIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Tooltip title="Hide Balance">
                            <IconButton onClick={hideBalance}>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {
                                            accountsTable.map((h) => {
                                                return <TableCell key={h}>{h}</TableCell>
                                            }
                                            )
                                        }
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        props.accounts.map((a) => {
                                            return <TableRow key={a.id}>
                                                <TableCell>
                                                    {a.accountName}
                                                </TableCell>
                                                <TableCell>
                                                    {a.accountNumber}
                                                </TableCell>
                                                <TableCell>
                                                    {isHideBalance ? "***** ** $" : a.balance + " $"}
                                                </TableCell>
                                                <TableCell>
                                                    {a.dateClosed}
                                                </TableCell>
                                            </TableRow>
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Collapse>
                </CardContent>
            </Card>
        </Container>
    )
}

export default Wallet;