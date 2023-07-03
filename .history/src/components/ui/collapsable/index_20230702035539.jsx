"use client"
import React from 'react';
import * as CC from '@radix-ui/react-collapsible';
import { RowSpacingIcon, Cross2Icon } from '@radix-ui/react-icons';
// import styles from './Collapsable.module.css';

const Collapsable = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <CC.Root className="CollapsibleRoot" open={open} onOpenChange={setOpen}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="Text" style={{ color: 'white' }}>
          @peduarte starred 3 repositories
        </span>
        <CC.Trigger asChild>
          <button className="IconButton">{open ? <Cross2Icon /> : <RowSpacingIcon />}</button>
        </CC.Trigger>
      </div>

      <div className="Repository">
        <span className="Text">@radix-ui/primitives</span>
      </div>

      <CC.Content>
        <div className="Repository">
          <span className="Text">@radix-ui/colors</span>
        </div>
        <div className="Repository">
          <span className="Text">@stitches/react</span>
        </div>
      </CC.Content>
    </CC.Root>
  );
};

export default Collapsable;