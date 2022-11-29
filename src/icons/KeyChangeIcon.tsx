import React, { FC, memo } from 'react';
import KeyChangeSvg from '../svg/key-change.svg';

export interface IKeyChangeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyChangeIcon: FC<IKeyChangeIconProps> = memo(props => {
  return <KeyChangeSvg {...props} />;
});
