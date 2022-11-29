import React, { FC, memo } from 'react';
import WhistleOutlineSvg from '../svg/whistle-outline.svg';

export interface IWhistleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WhistleOutlineIcon: FC<IWhistleOutlineIconProps> = memo(props => {
  return <WhistleOutlineSvg {...props} />;
});
