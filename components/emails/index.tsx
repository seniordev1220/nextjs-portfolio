import { Box, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emailStateType, getEmails } from '../../store/email/reducer';
import { emailDataItem } from '../../store/email/types';
import { RootState } from '../../store/types';


export const Emails = (props: any) => {
    const dispatch = useDispatch();
    const { emails } = useSelector<RootState>(state => state.email) as emailStateType;

    useEffect(() => {
        dispatch(getEmails({ limit: 999, offset: 0 }))
    }, [])

    const tableHeadings = [{ label: "Name", width: "15%" }, { label: "Email", width: "15%" },
    { label: "Subject", width: "20%" }, { label: "Message", width: "40%" }]

    return (
        <>
            <Box sx={{ backgroundColor: "white", height: "100vh" }}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width="10%">SL No</TableCell>
                                {tableHeadings.map((heading, index) => (
                                    <TableCell key={heading.label + index}
                                        width={heading.width} sx={{ width: `${heading.width}` }}>{
                                            heading.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {emails?.map((row: emailDataItem, index: number) => (
                                <TableRow key={row.name+row.email+row.subject} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">  {index + 1} </TableCell>
                                    <TableCell >{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell > <Typography >{row.subject}</Typography></TableCell>
                                    <TableCell >{row.message}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    )
}
