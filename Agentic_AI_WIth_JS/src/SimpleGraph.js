import { START, END, StateGraph, Annotation } from "@langchain/langgraph";

// State definition
const StateAnnotation = Annotation.Root({
    graph_info: Annotation,
});

// Node functions
function start_play(state) {
    console.log("Start_Play node has been called");
    return { graph_info: state.graph_info + " I am planning to play" };
}

function cricket(state) {
    console.log("My Cricket node has been called");
    return { graph_info: state.graph_info + " Cricket" };
}

function badminton(state) {
    console.log("My badminton node has been called");
    return { graph_info: state.graph_info + " Badminton" };
}

function basketball(state) {
    console.log("My basketball node has been called");
    return { graph_info: state.graph_info + " Basketball" };
}

function random_play1(state) {
    const options = ["cricket", "badminton", "basketball"];
    return options[Math.floor(Math.random() * options.length)];
}

// Build graph
const graph = new StateGraph(StateAnnotation)
    .addNode("start_play", start_play)
    .addNode("cricket", cricket)
    .addNode("badminton", badminton)
    .addNode("basketball", basketball);

graph.addEdge(START, "start_play");
graph.addConditionalEdges("start_play", random_play1);
graph.addEdge("cricket", END);
graph.addEdge("badminton", END);
graph.addEdge("basketball", END);

const graphBuilder = graph.compile();

// Run the graph
(async () => {
    console.log(await graphBuilder.invoke({ graph_info: "Hey My name is VaibhaV" }));


})();
