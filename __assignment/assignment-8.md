## **🎯 Assignment: Create an Article List Component Using Props and Children**  

### **📌 Problem Statement**  
Create a **React component** named `ArticleList` that displays multiple **`Article` components**.  
Each `Article` component should receive:  
1. **A `title` prop** (string) – The article's title.  
2. **Text content as children** (string) – The article's body.  

---

### **🔹 Requirements**  
- Use the provided `Article` component, where `children` must be a **string**.  
- Create an `ArticleList` component that **renders multiple `Article` components** using an array of data.  
- Use **Bootstrap classes** for styling.  
- The `ArticleList` component should be imported and used inside `App.tsx`.  

---

### **🔹 Expected Behavior**  
✅ **Displays a list of articles**, each containing:  
✔ A **title** (passed as a prop).  
✔ A **body** (passed as children).  
✔ Styled with Bootstrap cards.  

---

### **📌 Provided `Article.tsx` Component**  
```tsx

interface ArticleProps {
  title: string;
  children: string; // Restricting children to only text
}

const Article = ({title, children}: ArticleProps) => {
  return (
    <div className="card shadow-sm my-3">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{children}</p> {/* Displays text content */}
      </div>
    </div>
  );
};

export default Article;
```
✅ **Do not modify this file.**  

---

### **🔹 Task 1: Create `ArticleList.tsx`**  
- **Import** the `Article` component.  
- **Use an array** to store multiple articles (with `title` and `body`).  
- **Use `.map()`** to render an `Article` component for each article in the array.  

✅ **Example array structure:**
```tsx
const articles = [
  { title: "React Basics", body: "React is a JavaScript library for building UIs." },
  { title: "Understanding Props", body: "Props allow components to receive data from their parent." },
  { title: "What is Bootstrap?", body: "Bootstrap is a CSS framework that helps in designing responsive websites." },
];
```

---

### **🔹 Task 2: Import & Use `ArticleList` in `App.tsx`**  
- Import `ArticleList.tsx` in `App.tsx`.  
- Ensure Bootstrap is applied for styling.  
- The `App.tsx` should **only render the `ArticleList` component**.  

---

### **📌 Expected Output**
📌 **Articles**  
📜 **React Basics**  
🔹 React is a JavaScript library for building UIs.  

📜 **Understanding Props**  
🔹 Props allow components to receive data from their parent.  

📜 **What is Bootstrap?**  
🔹 Bootstrap is a CSS framework that helps in designing responsive websites.  

✅ **Each article should be inside a Bootstrap-styled card.**  

---
