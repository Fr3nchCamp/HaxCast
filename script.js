document.addEventListener("DOMContentLoaded", function() {
    const voteButtons = document.querySelectorAll(".vote-btn");
    const voteCounters = document.querySelectorAll(".votes");
    const calculateButton = document.getElementById("calculate");
    const resultDiv = document.getElementById("result");

    const votes = [0, 0, 0];

    voteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            votes[index]++;
            voteCounters[index].textContent = votes[index];
        });
    });

    calculateButton.addEventListener("click", () => {
        const totalVotes = votes.reduce((total, vote) => total + vote, 0);
        const percentages = votes.map(vote => ((vote / totalVotes) * 100).toFixed(2));

        resultDiv.innerHTML = `
            <p>Résultats des votes :</p>
            <ul>
                <li>Film 1: ${votes[0]} votes (${percentages[0]}%)</li>
                <li>Film 2: ${votes[1]} votes (${percentages[1]}%)</li>
                <li>Film 3: ${votes[2]} votes (${percentages[2]}%)</li>
            </ul>
        `;
    });
});
