import React, { FC, memo } from 'react';
import PandaSvg from '../svg/panda.svg';

export interface IPandaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PandaIcon: FC<IPandaIconProps> = memo(props => {
  return <PandaSvg {...props} />;
});
