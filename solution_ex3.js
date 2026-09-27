/*
PHÂN TÍCH LỖI:

1. Lệnh break khi gặp "X" làm vòng lặp dừng hoàn toàn.
   Vì vậy các ly phía sau "X" không được xử lý.

2. Theo nghiệp vụ, "X" chỉ là ly bị hủy tại chỗ,
   không phải tín hiệu kết thúc đơn hàng.

3. Cần thay break bằng continue để bỏ qua ly "X"
   nhưng vẫn tiếp tục tính các ly phía sau.
*/

const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
  const currentDrinkSize = orderSizes[orderIndex];

  if (currentDrinkSize === "X") {
    continue;
  }

  if (currentDrinkSize === "S") {
    totalDrinkAmount += basePriceSizeS;
  } else if (currentDrinkSize === "M") {
    totalDrinkAmount += basePriceSizeS + extraPriceSizeM;
  } else if (currentDrinkSize === "L") {
    totalDrinkAmount += basePriceSizeS + extraPriceSizeL;
  }
}

let finalBillAmount = (totalDrinkAmount + toppingCount * toppingPrice) * (isGoldMember ? 0.9 : 1.0);

console.log("Tổng tiền hóa đơn:", finalBillAmount, "VNĐ");