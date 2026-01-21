# CLOUDINARY VIDEO INTEGRATION GUIDE

> **Quick guide for adding videos to your Granville-Tech innovations**

---

## ✅ **WHAT'S BEEN IMPLEMENTED**

Your innovations section now supports **Cloudinary video integration** with:
- ✅ Video badge on cards with videos
- ✅ "Watch Demo" overlay on hover
- ✅ Video player as first page in modal
- ✅ Automatic page count adjustment (4 pages with video, 3 without)
- ✅ Responsive video player with Cloudinary controls

---

## 🎬 **HOW TO ADD VIDEOS TO YOUR INNOVATIONS**

### **Step 1: Upload Videos to Cloudinary**

1. Go to https://cloudinary.com
2. Log in to your account (`dggkj1npz`)
3. Click **Media Library** → **Upload**
4. Upload your innovation video
5. After upload, click on the video
6. Click **"<> Embed"** button
7. Select **"Video Player"**
8. Copy the **iframe src URL**

### **Step 2: Get the Embed URL**

From the Cloudinary player iframe, extract the `src` URL:

```html
<iframe
  src="https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=YOUR_VIDEO_ID&profile=cld-default"
  ...
></iframe>
```

Copy only the URL part:
```
https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=YOUR_VIDEO_ID&profile=cld-default
```

### **Step 3: Add to Your Innovation Data**

Open `src/pages/innovations.jsx` and find your innovation in the `innovationInfo` array.

**Current format for innovations WITHOUT video:**
```javascript
{
  title: "TimeSift",
  tagline: "Rediscover peace of mind with intelligent surveillance",
  description: "An AI-driven surveillance system...",
  videoUrl: null, // Add your Cloudinary video URL here
  hasVideo: false,
  ValueProposition: { ... }
}
```

**Update to add video:**
```javascript
{
  title: "TimeSift",
  tagline: "Rediscover peace of mind with intelligent surveillance",
  description: "An AI-driven surveillance system...",
  videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=YOUR_VIDEO_ID&profile=cld-default",
  hasVideo: true, // Change to true!
  ValueProposition: { ... }
}
```

### **Step 4: Save and Test**

1. Save the file
2. The dev server will auto-reload (if running)
3. Visit the innovations section
4. You should see:
   - Yellow "VIDEO" badge on the card
   - Play icon overlay on hover
   - Video player as first page when clicked

---

## 📝 **EXAMPLE: Adding Video to TimeSift**

### Before:
```javascript
{
  title: "TimeSift",
  tagline: "Rediscover peace of mind with intelligent surveillance",
  description: "An AI-driven surveillance system that transforms hours of CCTV footage into curated daily highlight reels, saving time and enhancing security",
  videoUrl: null, // ❌ No video
  hasVideo: false, // ❌ Not enabled
  ValueProposition: { ... }
}
```

### After:
```javascript
{
  title: "TimeSift",
  tagline: "Rediscover peace of mind with intelligent surveillance",
  description: "An AI-driven surveillance system that transforms hours of CCTV footage into curated daily highlight reels, saving time and enhancing security",
  videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=timesift_demo_v1&profile=cld-default", // ✅ Added URL
  hasVideo: true, // ✅ Enabled
  ValueProposition: { ... }
}
```

---

## 🎯 **CURRENT VIDEO STATUS**

| Innovation | Video Status | Action Needed |
|-----------|--------------|---------------|
| **ALETU** | ✅ Has Video | None - Already configured |
| **TimeSift** | ❌ No Video | Upload video & add URL |
| **EchoSign** | ❌ No Video | Upload video & add URL |
| **EchoSign Wearable** | ❌ No Video | Upload video & add URL |
| **Mentor Mirror** | ❌ No Video | Upload video & add URL |

---

## 🎨 **VIDEO BEST PRACTICES**

### **Video Specifications**
- **Format**: MP4 (H.264 codec)
- **Duration**: 30 seconds - 3 minutes (optimal: 60-90 seconds)
- **Resolution**: 1920x1080 (Full HD) or 1280x720 (HD)
- **Aspect Ratio**: 16:9
- **File Size**: < 50MB for fast loading
- **FPS**: 30fps or 60fps

### **Content Recommendations**
- **First 5 seconds**: Hook with problem/pain point
- **Next 30 seconds**: Show product in action
- **Final 15 seconds**: Key benefits + CTA
- **Audio**: Optional but recommended
- **Captions**: Highly recommended for accessibility

### **Tools for Creating Videos**
- **Screen Recording**: OBS Studio (free), Loom (free tier)
- **Editing**: DaVinci Resolve (free), CapCut (free)
- **Compression**: HandBrake (free)
- **Stock Footage**: Pexels, Pixabay (free)

---

## 🔧 **CLOUDINARY VIDEO FEATURES**

Your Cloudinary player automatically includes:
- ✅ Play/Pause controls
- ✅ Volume control
- ✅ Fullscreen mode
- ✅ Progress bar
- ✅ Quality selection (auto)
- ✅ Playback speed control
- ✅ Picture-in-picture mode
- ✅ Mobile responsive
- ✅ Keyboard shortcuts

---

## 🎬 **VIDEO CREATION WORKFLOW**

### **Option 1: Screen Recording Demo**
1. Prepare your product/prototype
2. Record screen with OBS Studio or Loom
3. Edit: Add intro/outro, trim, add music
4. Export as MP4
5. Upload to Cloudinary
6. Add URL to innovations.jsx

### **Option 2: Animated Explainer**
1. Create slides in Canva/Figma
2. Export slides as images
3. Use video editor to animate
4. Add voiceover explaining the innovation
5. Export as MP4
6. Upload to Cloudinary
7. Add URL to innovations.jsx

### **Option 3: Mixed Media**
1. Combine screen recordings + stock footage
2. Add text overlays for key points
3. Background music (royalty-free)
4. Voiceover narration
5. Export as MP4
6. Upload to Cloudinary
7. Add URL to innovations.jsx

---

## 🚀 **ADVANCED: Cloudinary Video Transformations**

You can enhance videos using Cloudinary's URL parameters:

### **Auto-quality optimization:**
```
&q_auto
```

### **Specific quality:**
```
&q_80
```

### **Auto-format (best for browser):**
```
&f_auto
```

### **Example enhanced URL:**
```
https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=YOUR_VIDEO_ID&profile=cld-default&q_auto&f_auto
```

---

## 📊 **ANALYTICS & TRACKING**

Cloudinary provides video analytics:
1. Go to Cloudinary Dashboard
2. Click **Reports** → **Video Analytics**
3. View:
   - Play count
   - Watch time
   - Completion rate
   - Geographic distribution

Use this data to:
- See which innovations get most views
- Optimize video length
- Improve engagement

---

## ⚠️ **TROUBLESHOOTING**

### **Video not showing?**
1. Check `hasVideo: true` is set
2. Verify `videoUrl` has correct Cloudinary URL
3. Check browser console for errors
4. Ensure video is public in Cloudinary

### **Video loads slowly?**
1. Compress video file (< 50MB)
2. Use Cloudinary auto-quality: `&q_auto`
3. Check internet connection
4. Use Cloudinary's CDN (automatic)

### **Video doesn't play?**
1. Check video format (MP4 recommended)
2. Verify Cloudinary account status
3. Check browser console for errors
4. Try different browser

### **Modal pages are misaligned?**
- The code automatically adjusts page count
- With video: Pages 1-4 (Video, Components, Vision, Value)
- Without video: Pages 1-3 (Components, Vision, Value)

---

## 📱 **MOBILE OPTIMIZATION**

Videos automatically adapt to mobile:
- ✅ Responsive player size
- ✅ Touch controls enabled
- ✅ Auto-quality based on connection
- ✅ Picture-in-picture supported
- ✅ Fullscreen mode available

---

## 💰 **CLOUDINARY PRICING INFO**

**Free Tier includes:**
- 25 GB storage
- 25 GB monthly bandwidth
- Video transformations
- CDN delivery
- Analytics

**If you need more:**
- Plus Plan: $99/month (100GB storage, 100GB bandwidth)
- Advanced Plan: $224/month (Unlimited transformations)

---

## 🎓 **LEARNING RESOURCES**

- **Cloudinary Docs**: https://cloudinary.com/documentation/video_player
- **Video SEO Guide**: https://moz.com/learn/seo/video-seo
- **OBS Tutorial**: https://obsproject.com/wiki/
- **Video Editing**: https://www.youtube.com/watch?v=Hls3Tp7JS8E

---

## 📞 **NEED HELP?**

If you encounter issues:
1. Check this guide first
2. Search Cloudinary documentation
3. Check browser console for errors
4. Contact Cloudinary support (support@cloudinary.com)
5. Ask in project chat/Slack

---

## ✅ **QUICK CHECKLIST FOR ADDING A VIDEO**

- [ ] Video created/recorded
- [ ] Video edited and exported as MP4
- [ ] Video uploaded to Cloudinary
- [ ] Cloudinary embed URL copied
- [ ] Opened `src/pages/innovations.jsx`
- [ ] Found the innovation in `innovationInfo` array
- [ ] Pasted URL into `videoUrl` field
- [ ] Changed `hasVideo` from `false` to `true`
- [ ] Saved file
- [ ] Tested on website
- [ ] Checked mobile responsiveness
- [ ] Verified video plays correctly

---

## 🎉 **EXAMPLE: Complete Innovation with Video**

```javascript
{
  title: "ALETU",
  tagline: "Revolutionizing education, one student at a time",
  description: "A cloud-based, AI-driven educational platform designed for secondary schools in Uganda.",
  
  // ✅ VIDEO CONFIGURATION
  videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dggkj1npz&public_id=ALETU__AI_Tutor_for_a_Nation_wmmbbc&profile=cld-default",
  hasVideo: true,
  
  // Rest of the data structure...
  ValueProposition: {
    Problem: "...",
    Solution: "...",
    KeyBenefits: { ... },
    Differentiators: [ ... ]
  },
  KeyComponents: { ... },
  VisionStatement: "...",
  TargetAudience: { ... },
  ValuePropositionStatement: "..."
}
```

---

**Version**: 1.0.0  
**Created**: November 4, 2025  
**For**: Granville-Tech Innovations Section

