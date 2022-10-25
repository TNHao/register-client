import { forwardRef, useEffect } from "react";
import VMasker from "vanilla-masker";
import * as S from "./styles";

const Input = forwardRef(({ errors, label, mask, ...rest }, ref) => {
  const inputHandler = (masks, max, event) => {
    const c = event.target;
    const v = c.value.replace(/\D/g, "");
    const m = masks.length > 1 && c.value.length > max ? 1 : 0;
    VMasker(c).unMask();
    VMasker(c).maskPattern(masks[m]);
    c.value = VMasker.toPattern(v, masks[m]);
  };

  useEffect(() => {
    if (mask) {
      if (!rest.name) return;
      const inputRef = document.getElementById(rest.name);

      if (inputRef) {
        inputRef.addEventListener(
          "input",
          (e) => inputHandler(mask.values, mask.maxLength, e),
          false
        );
      }
    }
  }, [mask, ref]);

  return (
    <S.Wrapper>
      {label && <label htmlFor={rest.name}>{label}</label>}
      <S.Input {...rest} ref={ref} id={rest.name} isError={!!errors} />
      {errors && <S.ErrorMessage>{errors.message}</S.ErrorMessage>}
    </S.Wrapper>
  );
});

export default Input;
