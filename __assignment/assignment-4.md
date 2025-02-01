### **Assignment: Conditional Rendering**  

#### **Problem Statement:**  
Create a **React component** named `LoginStatus` that displays different messages based on whether a user is logged in or logged out. The login state should be controlled using a **boolean variable (`isLoggedIn`)**

#### **Requirements:**  
1. Declare a **boolean variable** `isLoggedIn` inside the `LoginStatus` component.  
2. If `isLoggedIn` is `true`, display: **"Welcome, User!"**  
3. If `isLoggedIn` is `false`, display: **"Please log in."**  
4. **Manually** change the value of `isLoggedIn` in the code to see different outputs.  
5. The UI should update based on the **initial** value of `isLoggedIn`, but it should **not change dynamically** during runtime.  

---

### **Starter Code (Modify `isLoggedIn` Manually)**
```tsx
import React from "react";

function LoginStatus() {
  const isLoggedIn = true; // Change this manually to test different outputs

  return (
    <div>
      <h2>
    //   Write code here that uses conditional rendering
      </h2>
    </div>
  );
}

export default LoginStatus;
```

---

### **Instructions for Students:**
1. **Modify the `isLoggedIn` variable** inside the component and observe the UI changes.  
2. **Experiment by setting `isLoggedIn` to `false`** and note the output.  

---

### **Expected Output:**
| `isLoggedIn` Value | Displayed Output |
|-----------------|-------------------|
| `true`         | **Welcome, User!** |
| `false`        | **Please log in.** |

---

### **Learning Outcomes:**
✅ Understand **conditional rendering** in React.  