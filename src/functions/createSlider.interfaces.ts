import { Message, MessageEmbed } from "discord.js";

export interface SliderOptions {
  /**
   * Discord.js message class.
   */
  message: Message;

  /**
   *  Array of Embeds to use in the slider.
   */
  embeds: MessageEmbed[];

  /**
   *  Options for your buttons.
   */
  buttons: Button[];

  /**
   * The time (in milliseconds) that the buttons can be interactable.
   */
  time: number;

  /**
   * Other buttons.
   */
  otherButtons: OtherButtons;
}

export interface Button {
  /**
   * Name of the button.
   */
  name: ButtonNames;

  /**
   * Emoji used on the button.
   */
  emoji: string;

  /**
   * Style of the button.
   */
  style?: ButtonStyles;
}

export interface OtherButtons {
  /**
   * Indicates if the delete button should be in the slider.
   */
  deleteButton?: OtherButtonsOptions;

  /**
   * Indicates if the first page button should be in the slider.
   */
  firstButton?: OtherButtonsOptions;

  /**
   * Indicates if the last page button should be in the slider.
   */
  lastButton?: OtherButtonsOptions;
}

export interface OtherButtonsOptions {
  /**
   * Whether the button should be enabled or not.
   */
  enabled: boolean;

  /**
   * Position of the button in the row. You need to set a positive index,
   * the default buttons (back, foward) are in the array and you can't change
   * their positio. Don't forget that the buttons are receiveing position in
   * this order : first -> last -> delete, so make sure to set a correct index
   * if you want to do something very specific.
   */
  position?: number;
}

export type ButtonNames = "back" | "foward" | "first" | "last" | "delete";

export type ButtonStyles = "PRIMARY" | "SECONDARY" | "SUCCESS" | "DANGER";
