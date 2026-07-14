document.addEventListener('DOMContentLoaded', () => {
    
    // Lógica para cambiar Dificultad
    const difficultyCards = document.querySelectorAll('.option-card');
    difficultyCards.forEach(card => {
        card.addEventListener('click', () => {
            difficultyCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Lógica para recibir proyecto e inyectar chat
    const btnRecibir = document.getElementById('btn-recibir');
    const chatBox = document.getElementById('chat-box');
    const steps = document.querySelectorAll('.step');

    if (btnRecibir) {
        btnRecibir.addEventListener('click', () => {
            // 1. Mostrar mensaje en el chat
            chatBox.innerHTML = `
                <div class="message-ia">
                    <p><strong>🤖 Cliente IA:</strong> ¡Excelente! Has aceptado el proyecto.</p>
                    <p>Aquí tienes los detalles principales para comenzar a desarrollar:</p>
                    <ul>
                        <li>Crear la estructura del Dashboard a 2 columnas.</li>
                        <li>Configurar los archivos CSS de forma modular.</li>
                        <li>Implementar interacciones con JavaScript.</li>
                    </ul>
                    <p><em>Puedes usar los botones inferiores cuando termines.</em></p>
                </div>
            `;
            
            // 2. Avanzar el footer al paso 2 (Desarrollo)
            steps.forEach(step => step.classList.remove('active'));
            steps[1].classList.add('active'); // Índice 1 es el segundo paso
        });
    }
});