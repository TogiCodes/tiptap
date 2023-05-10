import React from "react";
import classNames from "classnames";
import { Editor } from "@tiptap/react";
import useInView from "react-cool-inview";
import {
  RiBold,
  RiItalic,
  RiStrikethrough,
  RiCodeSSlashLine,
  RiH1,
  RiH2,
  RiH3,
  RiH4,
  RiH5,
  RiH6,
  RiParagraph,
  RiListOrdered,
  RiListUnordered,
  RiCodeBoxLine,
  RiLink,
  RiLinkUnlinkM,
  RiDoubleQuotesL,
  RiSeparator,
  RiTextWrap,
  RiFormatClear,
  RiArrowGoBackLine,
  RiArrowGoForwardLine
} from "react-icons/ri";

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough
} from "react-icons/ai";

import sample from "lodash-es/sample.js";

import { setLink } from "../helpers";

import "./Toolbar.scss";

sample(["teste"]);

type ToolbarProps = {
  editor: Editor;
};

function Toolbar({ editor }: ToolbarProps) {
  const isCursorOverLink = editor.getAttributes("link").href;

  const { observe, inView } = useInView({
    rootMargin: "-1px 0px 0px 0px",
    threshold: [1]
  });

  return (
    <div
      className={classNames("ToolbarContainer", { sticky: !inView })}
      ref={observe}
    >
      <div className="Toolbar">
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <AiOutlineBold size={20} />
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <AiOutlineItalic size={20} />
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <AiOutlineStrikethrough size={20} />
        </div>
        <div className="divider"></div>
        <div
          className="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          <RiH1 size={22} />
        </div>
        <div
          className="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <RiH2 size={22} />
        </div>
        <div
          className="icon"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <RiH3 size={22} />
        </div>

        <div
          className="icon"
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <div className="text">P</div>
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <RiListUnordered size={22} />
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <RiListOrdered size={22} />
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <RiCodeBoxLine size={22} />
        </div>
        <div className="divider"></div>
        <div className="icon" onClick={() => setLink(editor)}>
          <RiLink size={22} />
        </div>
        <div
          className={classNames("icon", { disabled: !isCursorOverLink })}
          onClick={() => setLink(editor)}
        >
          <RiLinkUnlinkM size={22} />
        </div>
        <div className="divider"></div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <RiDoubleQuotesL size={22} />
        </div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <RiSeparator size={22} />
        </div>
        <div className="divider"></div>
        <div
          className="icon"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <RiTextWrap size={22} />
        </div>
        <div
          className="icon"
          onClick={() =>
            editor.chain().focus().unsetAllMarks().clearNodes().run()
          }
        >
          <RiFormatClear size={22} />
        </div>
        <div className="rightItems">
          <div className="divider"></div>
          <div
            className="icon"
            onClick={() => editor.chain().focus().undo().run()}
          >
            <RiArrowGoBackLine size={22} />
          </div>
          <div
            className="icon"
            onClick={() => editor.chain().focus().redo().run()}
          >
            <RiArrowGoForwardLine size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Toolbar };
