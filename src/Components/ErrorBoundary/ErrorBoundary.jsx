import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Met à jour l'état pour que la prochaine rendu affiche l'UI de repli
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez également enregistrer l'erreur au niveau du service de journalisation
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher un message d'erreur personnalisé ici
      return <h1>Quelque chose s'est mal passé.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
