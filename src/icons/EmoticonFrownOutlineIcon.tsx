import React, { FC, memo } from 'react';
import EmoticonFrownOutlineSvg from '../svg/emoticon-frown-outline.svg';

export interface IEmoticonFrownOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonFrownOutlineIcon: FC<IEmoticonFrownOutlineIconProps> = memo(props => {
  return <EmoticonFrownOutlineSvg {...props} />;
});
