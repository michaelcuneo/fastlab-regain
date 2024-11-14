<script>
  import HumanSelector from "./HumanSelector.svelte";
  import { user } from "$lib/store";
</script>

<div id="layout">
  <LayoutGrid>
    <Cell span={6}>
      <Card style="padding: 1em;">
        <h1>Welcome to regain, {user.value.username}</h1>
        <p>
          Regain is designed with human-centred translational technologies using
          medically tested verified instructions and techniques to exercise
          aspects of recovery for stroke survivors.
        </p>
        <p>
          For a stroke survivor, the time to begin rehabilitation is critical to
          ensure the best recovery. If rehabilitation is not started early,
          neurological functions deteriorate.
        </p>
        <p>
          Combining Industry, technology; with design and visual narrative for
          human behaviour at the forefront, we give patients a platform for
          which they can undertake guided rehabilitation in their own home.
        </p>
        <p>
          This will be the first clinically tested and co-designed stroke
          recovery application to deliver personalised exercises to change human
          behaviour as part of a tailored rehabilitation program set by
          clinicians, where a patient can watch videos and read information
          about an exercise, undertake the recommended repetitions and then
          provide feedback to their medical professional to seek refinement in
          their behaviour.
        </p>
        <p>
          The areas you pick here will define the types of exercises that we
          suggest you partake to regain your health. It doesn't matter if you
          get these wrong, you can come back to the settings and refine these
          later.
        </p>
        <p>
          Any areas affected by stroke click and make them orange. Anything not
          affected by stroke you can leave blue.
        </p>
      </Card>
    </Cell>
    <Cell span={6}>
      <Card>
        <HumanSelector />
      </Card>
    </Cell>
  </LayoutGrid>
</div>

<style>
  #layout {
    position: relative;
    width: 100%;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 22px;
    }
  }
</style>
