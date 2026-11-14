import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

pdf_path = r"D:\Portofolio Hafizh\public\cv\Hafizh-Muzani-Resume.pdf"
os.makedirs(os.path.dirname(pdf_path), exist_ok=True)

doc = SimpleDocTemplate(pdf_path, pagesize=letter, leftMargin=36, rightMargin=36, topMargin=32, bottomMargin=32)

PRIMARY = colors.HexColor("#0f172a")
ACCENT = colors.HexColor("#0284c7")
MUTED = colors.HexColor("#475569")
LINE_CLR = colors.HexColor("#cbd5e1")

styles = getSampleStyleSheet()

name_style = ParagraphStyle("Name", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=20, leading=23, textColor=PRIMARY, spaceAfter=2)
title_style = ParagraphStyle("JobTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=ACCENT, spaceAfter=4)
contact_style = ParagraphStyle("Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED)
section_heading = ParagraphStyle("SectionHeading", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=10, leading=12, textColor=PRIMARY, spaceBefore=7, spaceAfter=2)
body_style = ParagraphStyle("Body", parent=styles["Normal"], fontName="Helvetica", fontSize=8.5, leading=11.5, textColor=PRIMARY)
body_bold = ParagraphStyle("BodyBold", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=8.5, leading=11.5, textColor=PRIMARY)
body_muted = ParagraphStyle("BodyMuted", parent=styles["Normal"], fontName="Helvetica", fontSize=8, leading=10.5, textColor=MUTED)
project_title = ParagraphStyle("ProjectTitle", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=11.5, textColor=PRIMARY)

story = []

story.append(Paragraph("HAFIZH MUZANI", name_style))
story.append(Paragraph("Junior Full-Stack Developer · Open-Source Tool Builder", title_style))

contact_line = (
    "Semarang, Indonesia &nbsp;•&nbsp; +62 823-2723-9421 &nbsp;•&nbsp; "
    '<a href="mailto:hafizhmuzani011@gmail.com"><font color="#0284c7"><u>hafizhmuzani011@gmail.com</u></font></a> &nbsp;•&nbsp; '
    '<a href="https://hafizhhh.dev"><font color="#0284c7"><u>hafizhhh.dev</u></font></a> &nbsp;•&nbsp; '
    '<a href="https://github.com/apissaj"><font color="#0284c7"><u>github.com/apissaj</u></font></a> &nbsp;•&nbsp; '
    '<a href="https://www.linkedin.com/in/hafizmznn"><font color="#0284c7"><u>linkedin.com/in/hafizmznn</u></font></a>'
)
story.append(Paragraph(contact_line, contact_style))
story.append(Spacer(1, 4))
story.append(HRFlowable(width="100%", thickness=1, color=LINE_CLR, spaceAfter=5, spaceBefore=0))

story.append(Paragraph("Professional Summary", section_heading))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_CLR, spaceAfter=3, spaceBefore=1))
story.append(Paragraph(
    "Informatics Engineering student at Universitas Dian Nuswantoro (UDINUS) with hands-on experience "
    "building production web applications and developer tools. Proficient in React, Next.js, TypeScript, "
    "and Node.js, with practical experience in Cloudflare Workers edge computing, SQLite/D1 databases, "
    "and proxy/automation services. Active open-source contributor passionate about clean architecture and reliable tools.",
    body_style))

story.append(Paragraph("Technical Skills", section_heading))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_CLR, spaceAfter=3, spaceBefore=1))

skills_data = [
    [Paragraph("<b>Languages:</b>", body_bold), Paragraph("TypeScript, JavaScript (ES6+), Python, Go, SQL, HTML5, CSS3", body_style)],
    [Paragraph("<b>Frameworks:</b>", body_bold), Paragraph("React 19, Next.js 16 (App Router), Vue 3, Tailwind CSS v4, Express.js, Hono", body_style)],
    [Paragraph("<b>Cloud & Infra:</b>", body_bold), Paragraph("Cloudflare Workers, Cloudflare D1 (SQLite), Vercel, rclone, Git / GitHub", body_style)],
    [Paragraph("<b>Developer Tools:</b>", body_bold), Paragraph("REST APIs, SSE Streaming, LocalSend protocol, Vitest, Node.js, pnpm / npm", body_style)],
]
t_skills = Table(skills_data, colWidths=[110, 430])
t_skills.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(t_skills)

def proj_row(title_txt, date_txt):
    t = Table([[Paragraph(title_txt, project_title), Paragraph(date_txt, body_muted)]], colWidths=[420, 120])
    t.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'MIDDLE'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    return t

story.append(Paragraph("Featured Projects", section_heading))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_CLR, spaceAfter=4, spaceBefore=1))

story.append(proj_row("<b>Cloud Mail</b> — Self-Hosted Catch-All Email Platform", "<i>08.2025 – Present</i>"))
story.append(Paragraph(
    'Live Demo: <a href="https://mail.hafizhmuzani.my.id"><font color="#0284c7"><u>mail.hafizhmuzani.my.id</u></font></a> &nbsp;•&nbsp; '
    '<b>Stack:</b> Cloudflare Workers, D1 (SQLite), Vue 3, TypeScript',
    body_muted))
story.append(Paragraph(
    "• Architected a self-hosted email inspection and catch-all platform running on Cloudflare Workers edge infrastructure.<br/>"
    "• Designed REST API endpoints for automated OTP/verification code extraction for automation pipelines.<br/>"
    "• Implemented role-based access control (admin/user) with D1 persistence and a responsive Vue 3 frontend.",
    body_style))
story.append(Spacer(1, 4))

story.append(proj_row("<b>KoncetCloud</b> — Self-Hosted Cloud Backup & Multi-Storage Manager", "<i>10.2025 – Present</i>"))
story.append(Paragraph(
    'Live Demo: <a href="https://kc.koncetcloud.web.id"><font color="#0284c7"><u>kc.koncetcloud.web.id</u></font></a> &nbsp;•&nbsp; '
    '<b>Stack:</b> Vue 3, Node.js, Express, Tailwind CSS, rclone, LocalSend',
    body_muted))
story.append(Paragraph(
    "• Built a unified web dashboard managing 50+ remote cloud providers (Google Drive, MEGA, pCloud) backed by rclone.<br/>"
    "• Implemented zero-hop LocalSend receiver protocol (UDP discovery + chunked upload) to back up mobile media directly to cloud.<br/>"
    "• Engineered RFC 6238 2FA TOTP auth, anti-duplicate job mutex locks, and real-time transfer monitoring.",
    body_style))
story.append(Spacer(1, 4))

story.append(proj_row("<b>Developer Tools & LLM Gateways</b> (zenproxy, freebuff-proxy)", "<i>08.2025 – 09.2025</i>"))
story.append(Paragraph(
    '<b>Stack:</b> Go, Node.js, SSE Streaming, npm, Reverse Proxy',
    body_muted))
story.append(Paragraph(
    "• Developed lightweight OpenAI/Anthropic-compatible reverse proxies with automatic key rotation, rate-limit backoff, and SSE stream parsing; published freebuff-proxy to npm.",
    body_style))

story.append(Paragraph("Experience", section_heading))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_CLR, spaceAfter=4, spaceBefore=1))

story.append(proj_row("<b>Freelance Web Developer</b> — Self-Employed", "<i>09.2025 – Present</i>"))
story.append(Paragraph(
    "• Developed responsive web applications and landing pages using React, Next.js, TypeScript, and Tailwind CSS with a mobile-first approach.<br/>"
    "• Integrated frontends with RESTful APIs, third-party services, and Firebase backend (authentication and cloud datastore).<br/>"
    "• Built and maintained client automation tools, reducing manual data processing overhead.",
    body_style))

story.append(Paragraph("Education", section_heading))
story.append(HRFlowable(width="100%", thickness=0.5, color=LINE_CLR, spaceAfter=4, spaceBefore=1))

story.append(proj_row("<b>Universitas Dian Nuswantoro (UDINUS)</b> — Diploma in Informatics Engineering", "<i>2025 – Present</i>"))
story.append(Paragraph("Focus: Application Development, Information Systems, Software Engineering.", body_muted))
story.append(Spacer(1, 2))

story.append(proj_row("<b>SMK Negeri 9 Medan</b> — Visual Communication Design (DKV)", "<i>2021 – 2024</i>"))

doc.build(story)
print("PDF generated:", pdf_path)
