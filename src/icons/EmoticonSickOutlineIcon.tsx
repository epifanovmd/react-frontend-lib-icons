import React, { FC, memo } from 'react';
import EmoticonSickOutlineSvg from '../svg/emoticon-sick-outline.svg';

export interface IEmoticonSickOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonSickOutlineIcon: FC<IEmoticonSickOutlineIconProps> = memo(props => {
  return <EmoticonSickOutlineSvg {...props} />;
});
