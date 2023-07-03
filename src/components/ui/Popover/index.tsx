import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverWindow from '@radix-ui/react-popover';
import React from 'react';
import './popover.css';

interface PopoverProps {
  children: React.ReactNode;
  content: any;
  // user: any;
}
const Popover = ({ children, content }: PopoverProps) => (
  <PopoverWindow.Root>
    <PopoverWindow.Trigger asChild>
      <button className="IconButton" aria-label="Update dimensions">
        {children}
      </button>
    </PopoverWindow.Trigger>
    <PopoverWindow.Portal>
      <PopoverWindow.Content className="PopoverContent" sideOffset={5}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {/* <p className="Text" style={{ marginBottom: 10 }}>
            {user.user_metadata.full_name}
          </p> */}
          {Object.keys(content).map((key) => {
            const linkAction = content[key].linkType === 'href' ? 'href' : 'onClick';
            const link = linkAction === 'href' ? content[key].href : content[key].onClick;
            return (
              <a
                key={key}
                {...{ [linkAction]: link }}
                className="popover-link"
              >
                {content[key].title}
              </a>
            );
          })}
        </div>
        <PopoverWindow.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </PopoverWindow.Close>
        <PopoverWindow.Arrow className="PopoverArrow" />
      </PopoverWindow.Content>
    </PopoverWindow.Portal>
  </PopoverWindow.Root>
);

export default Popover;
