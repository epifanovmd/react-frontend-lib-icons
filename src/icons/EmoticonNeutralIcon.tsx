import React, { FC, memo } from 'react';
import EmoticonNeutralSvg from '../svg/emoticon-neutral.svg';

export interface IEmoticonNeutralIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonNeutralIcon: FC<IEmoticonNeutralIconProps> = memo(props => {
  return <EmoticonNeutralSvg {...props} />;
});
