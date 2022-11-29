import React, { FC, memo } from 'react';
import SkullCrossbonesOutlineSvg from '../svg/skull-crossbones-outline.svg';

export interface ISkullCrossbonesOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SkullCrossbonesOutlineIcon: FC<ISkullCrossbonesOutlineIconProps> = memo(props => {
  return <SkullCrossbonesOutlineSvg {...props} />;
});
