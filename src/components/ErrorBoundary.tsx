// import { createSignal, ErrorBoundary as SolidErrorBoundary } from 'solid-js'
// import './ErrorBoundary.css'
//
// interface ErrorBoundaryProps {
//   children: any
//   fallback?: any
// }
//
// export default function ErrorBoundary(props: ErrorBoundaryProps) {
//   const [hasError, setHasError] = createSignal(false)
//   const [error, setError] = createSignal<Error | null>(null)
//
//   const handleError = (err: Error) => {
//     setHasError(true)
//     setError(err)
//     console.error('Error caught by boundary:', err)
//   }
//
//   const resetError = () => {
//     setHasError(false)
//     setError(null)
//   }
//
//   return (
//     <SolidErrorBoundary fallback={(err, reset) => (
//       <div class="error-boundary">
//         <div class="error-content">
//           <div class="error-icon">⚠️</div>
//           <h2 class="error-title">Something went wrong</h2>
//           <p class="error-message">
//             We're sorry, but something unexpected happened. Please try refreshing the page.
//           </p>
//           {process.env.NODE_ENV === 'development' && (
//             <details class="error-details">
//               <summary>Error Details</summary>
//               <pre class="error-stack">{err?.stack}</pre>
//             </details>
//           )}
//           <div class="error-actions">
//             <button class="btn btn-primary" onClick={reset}>
//               Try Again
//             </button>
//             <button class="btn btn-secondary" onClick={() => window.location.reload()}>
//               Refresh Page
//             </button>
//           </div>
//         </div>
//       </div>
//     )}>
//       {props.children}
//     </SolidErrorBoundary>
//   )
// }
