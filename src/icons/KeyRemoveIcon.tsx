import React, { FC, memo } from 'react';
import KeyRemoveSvg from '../svg/key-remove.svg';

export interface IKeyRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const KeyRemoveIcon: FC<IKeyRemoveIconProps> = memo(props => {
  return <KeyRemoveSvg {...props} />;
});
