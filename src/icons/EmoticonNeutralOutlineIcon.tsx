import React, { FC, memo } from 'react';
import EmoticonNeutralOutlineSvg from '../svg/emoticon-neutral-outline.svg';

export interface IEmoticonNeutralOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonNeutralOutlineIcon: FC<IEmoticonNeutralOutlineIconProps> = memo(props => {
  return <EmoticonNeutralOutlineSvg {...props} />;
});
