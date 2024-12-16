# Bills Creation Application

This project is a web application designed for generating bills with an intuitive user interface. Users can input data on the left side of the screen, which dynamically renders a preview on the right side. The rendered content can then be exported as a PDF.

## Features

1. **Dynamic Input Fields**
   - The left panel contains form fields for bill creation, such as customer details, item descriptions, prices, taxes, etc.
   - Real-time rendering of inputs to the right-side preview area.

2. **Live Bill Preview**
   - The right panel displays a dynamically updated bill based on user inputs.
   - Multiple bill templates are available, such as tax invoices, performa bills, etc.

3. **PDF Generation**
   - The rendered bill can be exported as a PDF for easy sharing and printing.

4. **User Authentication**
   - Secure login functionality ensures only authorized users can access the application.

5. **State Management**
   - Redux or a similar state management library is used for managing the application's state.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BZTECH404/3.Bills
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## File Structure

### Key Files and Directories

- `src/Component/`
  - Contains reusable components for bills and forms.
  - **Bill Templates**:
    - `BzCounsaltant.js`, `BzTech.js`, `Performabill.js`, etc.
  - **Forms and Inputs**:
    - `Performa.js`, `Tax.js`

- `src/store.js`
  - Manages global application state.

- `src/action/stepperAction.js`
  - Contains action definitions for managing state transitions.

- `src/TaxCollecting.js`
  - Logic for handling tax-related operations.

- `public/`
  - Static assets like `index.html` and icons.

## Usage

1. **Log In**
   - Start by logging into the application with your credentials.

2. **Create a Bill**
   - Use the input fields on the left to provide necessary details.
   - Watch the preview update dynamically on the right.

3. **Export to PDF**
   - Once the bill is ready, click the export button to download the rendered bill as a PDF.

## Dependencies

- React: Frontend framework.
- Redux: State management.
- jsPDF or similar (if used): For PDF generation.
- Axios: For API calls.

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push them:
   ```bash
   git commit -m "Add feature"
   git push origin feature-name
   ```
4. Open a pull request.


## Acknowledgments

- Thanks to the team for their contributions to the project.

