<template>
  <div class="flex relative">
    <span
      class="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b text-gray-500 shadow-sm text-sm"
      :class="error ? 'border-red-500' : 'border-gray-300'"
    >
      <span class="material-icons">
        {{ icon }}
      </span>
    </span>
    <input
      type="text"
      :id="forLabel"
      :value="modelValue"
      @input="updateValue"
      class="rounded-r-lg flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-green focus:border-transparent"
      :class="error ? 'border-red-500' : 'border-gray-300'"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    forLabel: {
      type: String,
    },
    error: {
      type: Boolean,
    },
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const updateValue = (event) => {
      context.emit("update:modelValue", event.target.value);
    };
    return { updateValue };
  },
};
</script>
