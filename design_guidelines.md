# Design Guidelines: Memory & Notification Mobile App

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Instagram's visual-rich content display combined with iOS native app patterns for notifications and navigation. This is a mobile-first, content-focused application emphasizing visual storytelling and timely updates.

## Core Design Elements

### Typography Hierarchy
- **Screen Titles**: Large, bold weight (28-32px) for primary headers
- **Card Titles**: Medium weight (16-18px) for content labels
- **Body Text**: Regular weight (14-16px) for descriptions and timestamps
- **Metadata**: Lighter weight (12-14px) for secondary information
- Use system fonts for optimal mobile performance

### Layout System
**Spacing Units**: Use Tailwind units of 2, 4, 6, and 8 consistently
- Component padding: p-4 to p-6
- Section margins: my-6 to my-8
- Card gaps: gap-4 for grids
- Screen edge padding: px-4

### Screen Layouts

**Mementos Screen (Grid View)**:
- Full-screen grid layout with 2 columns
- Consistent aspect ratio cards (square or 4:3)
- Rounded corners on all image cards (rounded-lg to rounded-xl)
- Text labels centered below each image
- Top navigation bar with screen title
- Bottom tab navigation

**Notifications Screen (List View)**:
- Full-width list items with left icon/avatar
- Stacked layout: title, message, timestamp
- Subtle dividers between items
- Consistent vertical rhythm with py-4 per item
- Status indicators (unread dots, badges)

### Component Library

**Navigation**:
- Top bar: Fixed header with screen title and action buttons
- Bottom tabs: 4-5 primary navigation items with icons and labels
- Tab indicator: Subtle highlight for active state

**Cards (Mementos)**:
- Image container with overlay capability
- Title text overlay or below image
- Tap target extends full card area
- Subtle shadow for depth

**List Items (Notifications)**:
- Leading icon/avatar (40-48px)
- Text stack: heading + subtext + timestamp
- Trailing action icon or badge
- Full-width tap target

**Empty States**:
- Centered icon + message
- Encouraging CTA button
- Generous padding around content

**Action Buttons**:
- Primary: Rounded-full pill buttons
- Secondary: Minimal text buttons
- Icon buttons: 44px minimum tap target

### Images
**Hero/Featured Images**: YES - The Mementos screen is image-dominant
- Location: Grid layout occupying full content area
- Description: User-uploaded memory photos displayed as square or rectangular cards in 2-column grid
- Treatment: Rounded corners, consistent sizing, optional gradient overlay for text readability

**Thumbnail/Avatar Images**: YES
- Location: Notification list items (left side)
- Description: Small circular or rounded-square icons representing notification type or sender
- Treatment: Consistent 40-48px size with subtle border

### Animations
**Minimal and Purposeful**:
- Subtle scale on card press (0.95 scale)
- Smooth tab transitions (200ms)
- Pull-to-refresh indicator
- New notification badge pulse

### Responsive Behavior
- Mobile-first: 375px to 430px baseline
- Tablet: Switch to 3-column grid for Mementos
- Maintain consistent spacing ratios across breakpoints

### Accessibility
- Minimum 44x44px touch targets
- Sufficient contrast for all text
- VoiceOver/screen reader labels on all interactive elements
- Clear focus states for keyboard navigation

### Key UX Patterns
- Swipe gestures for list item actions
- Long-press for contextual menus
- Pull-to-refresh for content updates
- Infinite scroll or pagination for content
- Clear back navigation patterns
- Confirmation modals for destructive actions