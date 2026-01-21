# GRANVILLE-TECH ENTITY RELATIONSHIP DIAGRAM (VISUAL)

## SIMPLIFIED ERD OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                         GRANVILLE-TECH DATA MODEL                               │
└─────────────────────────────────────────────────────────────────────────────────┘


                            ┌──────────────┐
                            │   COMPANY    │
                            │──────────────│
                            │ id (PK)      │
                            │ name         │
                            │ tagline      │
                            │ mission      │
                            └──────┬───────┘
                                   │
                ┌──────────────────┼──────────────────┬─────────────┐
                │                  │                  │             │
                │                  │                  │             │
        ┌───────▼────────┐  ┌─────▼──────┐  ┌───────▼──────┐  ┌──▼────────┐
        │   INNOVATION   │  │  SERVICE   │  │ TEAM_MEMBER  │  │  PARTNER  │
        │────────────────│  │────────────│  │──────────────│  │───────────│
        │ id (PK)        │  │ id (PK)    │  │ id (PK)      │  │ id (PK)   │
        │ title          │  │ title      │  │ first_name   │  │ name      │
        │ tagline        │  │ slug       │  │ last_name    │  │ logo_url  │
        │ description    │  │ icon_name  │  │ role_id (FK) │  │ url       │
        │ vision         │  │ benefits   │  │ bio          │  │ active    │
        │ status         │  │ status     │  │ image_url    │  │           │
        └───────┬────────┘  └─────┬──────┘  └──────┬───────┘  └───────────┘
                │                 │                 │
                │                 │                 │
      ┌─────────┴────┐           │         ┌───────┴────────┐
      │              │            │         │                │
┌─────▼──────┐  ┌───▼──────┐     │   ┌────▼─────┐   ┌──────▼────────┐
│INNOVATION_ │  │ TARGET_  │     │   │   ROLE   │   │ SOCIAL_LINK   │
│   IMAGE    │  │ AUDIENCE │     │   │──────────│   │───────────────│
│────────────│  │──────────│     │   │ id (PK)  │   │ id (PK)       │
│ id (PK)    │  │ id (PK)  │     │   │ name     │   │ member_id(FK) │
│ innov(FK)  │  │ innov(FK)│     │   │ level    │   │ platform      │
│ image_url  │  │ message  │     │   └──────────┘   │ url           │
│ is_primary │  │ priority │     │                  └───────────────┘
└────────────┘  └──────────┘     │
                                 │
                        ┌────────▼────────┐
                        │ SERVICE_BENEFIT │
                        │─────────────────│
                        │ id (PK)         │
                        │ service_id (FK) │
                        │ benefit_text    │
                        └─────────────────┘


┌───────────────────────────────────────────────────────────────────────────────┐
│                      LEAD MANAGEMENT & CRM SYSTEM                             │
└───────────────────────────────────────────────────────────────────────────────┘

                            ┌───────────────┐
                            │     LEAD      │
                            │───────────────│
                            │ id (PK)       │
                            │ email (unique)│
                            │ first_name    │
                            │ last_name     │
                            │ phone         │
                            │ company       │
                            │ lead_source   │
                            │ lead_status   │
                            │ lead_score    │
                            └───────┬───────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
          ┌─────────▼────────┐  ┌──▼────────────┐  ┌─▼────────────┐
          │  CONTACT_FORM    │  │   BOOKING     │  │ INTERACTION  │
          │──────────────────│  │───────────────│  │──────────────│
          │ id (PK)          │  │ id (PK)       │  │ id (PK)      │
          │ lead_id (FK)     │  │ lead_id (FK)  │  │ lead_id (FK) │
          │ service_id (FK)  │  │ member_id(FK) │  │ type         │
          │ first_name       │  │ name          │  │ source       │
          │ last_name        │  │ email         │  │ notes        │
          │ email            │  │ scheduled_time│  │ metadata     │
          │ phone            │  │ duration      │  │ date         │
          │ message          │  │ status        │  └──────────────┘
          │ status           │  │ external_id   │
          │ submitted_at     │  │ (Calendly)    │
          └──────────────────┘  └───────────────┘


┌───────────────────────────────────────────────────────────────────────────────┐
│                      CONTENT MANAGEMENT SYSTEM                                │
└───────────────────────────────────────────────────────────────────────────────┘

                            ┌───────────────┐
                            │    ARTICLE    │
                            │───────────────│
                            │ id (PK)       │
                            │ author_id(FK) │────────┐
                            │ innov_id (FK) │        │
                            │ title         │        │
                            │ slug (unique) │        │
                            │ excerpt       │        │ References
                            │ content       │        │ TEAM_MEMBER
                            │ image_url     │        │
                            │ status        │        │
                            │ view_count    │        │
                            │ published_date│        │
                            └───────┬───────┘        │
                                    │                │
                          ┌─────────▼──────┐         │
                          │  ARTICLE_TAG   │         │
                          │────────────────│         │
                          │ id (PK)        │         │
                          │ article_id(FK) │         │
                          │ tag_name       │         │
                          └────────────────┘         │
                                                     │
                                    ┌────────────────┘
                                    │
                            ┌───────▼───────┐
                            │  TEAM_MEMBER  │
                            │───────────────│
                            │ id (PK)       │
                            │ (from above)  │
                            └───────────────┘


┌───────────────────────────────────────────────────────────────────────────────┐
│                         CORE VALUES & BRANDING                                │
└───────────────────────────────────────────────────────────────────────────────┘

                            ┌───────────────┐
                            │     VALUE     │
                            │───────────────│
                            │ id (PK)       │
                            │ name          │
                            │ description   │
                            │ image_url     │
                            │ display_order │
                            └───────────────┘
```

---

## RELATIONSHIP TYPES

### One-to-Many Relationships (1:N)
```
COMPANY ──< INNOVATION
  One company has many innovations

COMPANY ──< SERVICE
  One company offers many services

COMPANY ──< TEAM_MEMBER
  One company employs many team members

COMPANY ──< PARTNER
  One company has many partners

INNOVATION ──< INNOVATION_IMAGE
  One innovation has many images

INNOVATION ──< TARGET_AUDIENCE
  One innovation targets many audiences

TEAM_MEMBER ──< SOCIAL_LINK
  One team member has many social links

SERVICE ──< SERVICE_BENEFIT
  One service has many benefits

LEAD ──< CONTACT_FORM
  One lead submits many contact forms

LEAD ──< BOOKING
  One lead creates many bookings

LEAD ──< INTERACTION
  One lead has many interactions

TEAM_MEMBER ──< ARTICLE
  One team member authors many articles

ARTICLE ──< ARTICLE_TAG
  One article has many tags
```

### Many-to-One Relationships (N:1)
```
TEAM_MEMBER >── ROLE
  Many team members belong to one role

CONTACT_FORM >── SERVICE
  Many contact forms inquire about one service

BOOKING >── TEAM_MEMBER
  Many bookings are scheduled with one team member

ARTICLE >── INNOVATION
  Many articles relate to one innovation
```

---

## DATA FLOW DIAGRAM

### Contact Form Submission Flow
```
┌─────────┐     ┌─────────┐     ┌──────────┐     ┌──────────┐
│  User   │────▶│ Frontend│────▶│  Backend │────▶│ Database │
│ Submits │     │Validates│     │ Processes│     │  Stores  │
└─────────┘     └─────────┘     └──────────┘     └────┬─────┘
                                                       │
                                     ┌─────────────────┼──────────────┐
                                     │                 │              │
                              ┌──────▼──────┐   ┌─────▼─────┐  ┌─────▼────┐
                              │ Create/     │   │  Store    │  │  Send    │
                              │ Update LEAD │   │  CONTACT  │  │  Email   │
                              │             │   │   FORM    │  │  Notif   │
                              └─────────────┘   └───────────┘  └──────────┘
```

### Booking Creation Flow
```
┌─────────┐     ┌─────────┐     ┌──────────┐     ┌──────────┐
│  User   │────▶│Calendly │────▶│  Webhook │────▶│ Database │
│ Schedules     │ Widget  │     │ Handler  │     │  Stores  │
└─────────┘     └─────────┘     └──────────┘     └────┬─────┘
                                                       │
                                     ┌─────────────────┼──────────────┐
                                     │                 │              │
                              ┌──────▼──────┐   ┌─────▼─────┐  ┌─────▼────┐
                              │ Create/     │   │  Store    │  │  Notify  │
                              │ Update LEAD │   │  BOOKING  │  │   Team   │
                              │             │   │           │  │  Member  │
                              └─────────────┘   └───────────┘  └──────────┘
```

### Content Display Flow
```
┌─────────┐     ┌─────────┐     ┌──────────┐     ┌──────────┐
│  User   │────▶│ Frontend│────▶│ API Call │────▶│ Database │
│ Visits  │     │Component│     │          │     │  Query   │
└─────────┘     └────┬────┘     └──────────┘     └────┬─────┘
                     │                                 │
                     │                                 │
                     │          ┌──────────┐           │
                     └──────────│  Cache   │◀──────────┘
                                │  Layer   │
                                └──────────┘
                                     │
                          ┌──────────▼──────────┐
                          │   Render Content    │
                          │ (Innovations, Team, │
                          │  Services, etc.)    │
                          └─────────────────────┘
```

---

## DATABASE INDEXES SUMMARY

### Primary Indexes (Auto-created on Primary Keys)
- All tables have `id (UUID)` as PRIMARY KEY

### Performance Indexes
```sql
-- Innovations
CREATE INDEX idx_innovations_status ON innovations(status);
CREATE INDEX idx_innovations_slug ON innovations(slug);
CREATE INDEX idx_innovations_display_order ON innovations(display_order);

-- Team Members
CREATE INDEX idx_team_members_active ON team_members(is_active);
CREATE INDEX idx_team_members_role ON team_members(role_id);
CREATE INDEX idx_team_members_display_order ON team_members(display_order);

-- Services
CREATE INDEX idx_services_status ON services(status);
CREATE INDEX idx_services_slug ON services(slug);

-- Leads
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(lead_status);
CREATE INDEX idx_leads_score ON leads(lead_score);

-- Contact Forms
CREATE INDEX idx_contact_forms_status ON contact_forms(status);
CREATE INDEX idx_contact_forms_lead ON contact_forms(lead_id);
CREATE INDEX idx_contact_forms_submitted ON contact_forms(submitted_at);

-- Bookings
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_scheduled_time ON bookings(scheduled_time);
CREATE INDEX idx_bookings_lead ON bookings(lead_id);

-- Articles
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_published ON articles(published_date);
CREATE INDEX idx_articles_author ON articles(author_id);

-- Full-text search on articles
CREATE INDEX idx_articles_search ON articles 
USING GIN (to_tsvector('english', title || ' ' || excerpt || ' ' || content));
```

---

## DATA VALIDATION RULES

### Email Validation
```
Pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
Example: user@example.com
```

### Phone Validation
```
Pattern: /^\d{10}$/
Example: 1234567890 (10 digits)
```

### Slug Generation
```
Function: title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
Example: "ALETU Platform" → "aletu-platform"
```

### Status Enums
```
Innovation Status: 'active' | 'inactive' | 'coming_soon'
Service Status: 'active' | 'inactive' | 'coming_soon'
Lead Status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
Contact Form Status: 'new' | 'in_progress' | 'responded' | 'closed'
Booking Status: 'scheduled' | 'completed' | 'cancelled' | 'no_show'
Article Status: 'draft' | 'published' | 'archived'
```

---

## SECURITY & PERMISSIONS

### Public Endpoints (No Auth Required)
```
GET  /api/innovations
GET  /api/innovations/:slug
GET  /api/team
GET  /api/services
GET  /api/articles
GET  /api/articles/:slug
POST /api/contact
POST /api/bookings (webhook only)
```

### Protected Endpoints (Admin Auth Required)
```
POST   /api/innovations
PUT    /api/innovations/:id
DELETE /api/innovations/:id

POST   /api/team
PUT    /api/team/:id
DELETE /api/team/:id

POST   /api/services
PUT    /api/services/:id
DELETE /api/services/:id

GET    /api/contact (list all)
PUT    /api/contact/:id/status

GET    /api/bookings (list all)
PUT    /api/bookings/:id/status

POST   /api/articles
PUT    /api/articles/:id
DELETE /api/articles/:id
```

---

## BACKUP & RECOVERY

### Backup Strategy
```
Daily:    Full database backup (automated)
Hourly:   Incremental backups for critical tables
Weekly:   Archive to cold storage
Monthly:  Compliance snapshots
```

### Critical Tables (High Priority Backup)
1. `leads` - All lead data
2. `contact_forms` - Customer inquiries
3. `bookings` - Scheduled meetings
4. `interactions` - Customer journey data

### Reference Tables (Lower Priority)
1. `innovations` - Can be re-entered
2. `team_members` - Can be re-entered
3. `services` - Can be re-entered
4. `articles` - Should be backed up but less critical

---

## SCALABILITY CONSIDERATIONS

### Horizontal Scaling
- **Read Replicas**: For GET requests
- **Load Balancing**: Distribute traffic
- **CDN**: Static assets and images

### Vertical Scaling
- **Database**: Increase RAM/CPU as data grows
- **Caching**: Redis for frequent queries
- **Search**: Elasticsearch for full-text search

### Future Optimizations
```
┌───────────────────────────────────────────┐
│ Current: Monolithic Database              │
│                                           │
│  ┌─────────────────────────────────┐    │
│  │  PostgreSQL (All Tables)        │    │
│  └─────────────────────────────────┘    │
└───────────────────────────────────────────┘

┌───────────────────────────────────────────┐
│ Future: Microservices Architecture        │
│                                           │
│  ┌──────────┐  ┌──────────┐  ┌────────┐ │
│  │ Content  │  │   CRM    │  │ Analytics││
│  │ Service  │  │ Service  │  │ Service  ││
│  │          │  │          │  │          ││
│  │ Postgres │  │ Postgres │  │TimeSeries││
│  └──────────┘  └──────────┘  └────────┘ │
└───────────────────────────────────────────┘
```

---

**Version**: 1.0.0  
**Format**: Mermaid + ASCII Diagrams  
**Purpose**: Visual reference for database architecture  
**Last Updated**: November 4, 2025

