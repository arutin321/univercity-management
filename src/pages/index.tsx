import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function HomePage() {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" mt={8}>
                <Typography variant="h3" component="h1" gutterBottom>学生ポータル</Typography>
                <Link href="/login" passHref>
                    <Button variant="contained" color="primary">
                        ログイン
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
